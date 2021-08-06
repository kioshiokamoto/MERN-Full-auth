import React, { createContext, useEffect, useReducer } from "react";
import { get, post, setAuth } from "../utils/http";
import reducers from "./Reducers";
import { useToast } from "@chakra-ui/react";

export const DataContext = createContext({
    state: {},
    dispatch: () => null,
});

export const DataProvider = ({ children }) => {
    const initialState = {
        auth: {},
        authReady: true,
        authType: "none",
        cart: [],
        products: [],
        requests: [],
    };
    const [state, dispatch] = useReducer(reducers, initialState);
    const { authType, cart } = state;
    const toast = useToast();
    const showToast = (errMessage) => {
        toast({
            title: "Error al iniciar sesión.",
            description: `${errMessage}`,
            position: "top",
            status: "error",
            duration: 9000,
            isClosable: true,
        });
    };

    useEffect(() => {
        const logging = async () => {
            // TODO: console.log
            // console.log("ejecutando efecto");
            const isLogged = localStorage.getItem("isLogged");
            const typeLogged = localStorage.getItem("typeLogged");
            if (isLogged) {
                try {
                    const accessToken = await post("/user/refresh_token", {});
                    console.log("accessToken: ", accessToken);
                    if (accessToken.data.msg === "Please login now") {
                       localStorage.removeItem("isLogged")
                       return showToast("Error con el token de acceso")
                    }
                    // console.log("setAuth: ", accessToken.data.access_token)
                    setAuth(accessToken.data.access_token)
                    const user = await get("/user/info")
                    if (user.data.msg === "Invalid authentication") {
                       return showToast("Error al recuperar datos del usuario")
                    }
                    console.log('user: ',user)
                    dispatch({
                        type: "AUTH",
                        payload: {
                            access_token: accessToken.data.access_token,
                            user: {
                                id: user.data.id,
                                createdAt: user.data.createdAt,
                                updatedAt: user.data.updatedAt,
                                us_correo: user.data.email,
                                us_nombre: user.data.name.split(' ')[0],
                                us_apellido: user.data.name.split(' ')[1],
                                avatar: "",
                                role: user.data.role === "0" ? "user" :"admin"
                                // posts: user.data.posts
                            },
                        },
                    });
                    const products = await get(`/post/all`)
                    // const data = await res.json()
                    dispatch({
                        type: "GET_PRODUCTS",
                        payload: products.data.posts
                    });

                    if (typeLogged === "normal") {
                        dispatch({ type: "AUTH_TYPE", payload: "normal" });
                    }
                } catch (err) {
                    console.log("error: ", err);
                }
            }
        };
        
        logging();
        dispatch({
            type: "AUTH_READY",
            payload: true,
        });
        // get("/api/category/categories")
        //   .then(categories => {
        //     dispatch({ type: "GET_CATEGORIES", payload: categories.data })
        //   })
        //   .catch(() => showToast("Error al recuperar categorias"))
    }, [authType]);
    useEffect(() => {
        const __next__cart__ = JSON.parse(
            localStorage.getItem("__next__cart__")
        );

        if (__next__cart__)
            dispatch({ type: "ADD_ALL_CART", payload: __next__cart__ });
    }, []);

    useEffect(() => {
        localStorage.setItem("__next__cart__", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <DataContext.Provider value={{ state, dispatch }}>
                {children}
            </DataContext.Provider>
        </>
    );
};

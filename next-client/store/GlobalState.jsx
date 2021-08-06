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
        articles: [],
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
                    //const accessToken = await post("/user/refresh_token", {});
                    const respaccessToken = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/refresh_token`,{
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({}),
                        credentials: "include",
                    })
                    const dataAccess = await respaccessToken.json()
                    const accessToken = {error:null, data:dataAccess}
                    console.log('accestoken: ',accessToken)
                    if (accessToken.data.msg === "Please login now") {
                       localStorage.removeItem("isLogged")
                       return showToast("Error con el token de acceso")
                    }
                    // console.log("setAuth: ", accessToken.data.access_token)
                    // setAuth(accessToken.data.access_token)
                    // const user = await get("/user/info")
                    // if (user.data.msg === "Invalid authentication") {
                    //    return showToast("Error al recuperar datos del usuario")
                    // }
                    const respUser = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/info`,{
                        headers: {
                            Authorization: accessToken.data.access_token,
                            "Content-Type": "application/json",
                        },
                        method: "GET",
                    })
                    const dataUser = await respUser.json()
                    const user = { error : null, data:dataUser}
                    dispatch({
                        type: "AUTH",
                        payload: {
                            access_token: accessToken.data.access_token,
                            user: {
                                id: user.data._id,
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
                    if (typeLogged === "normal") {
                        dispatch({ type: "AUTH_TYPE", payload: "normal" });
                    }
                    
                } catch (err) {
                    console.log("error: ", err);
                }
            }
        };

        const getProducts = async() => {
            try{
                const products = await get(`/post/all`)
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: products.data.posts
                });

                
            }catch (err) {
                console.log("error: ", err);
            }
        }
        
        logging();
        getProducts();
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

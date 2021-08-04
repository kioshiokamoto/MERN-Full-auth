/* istanbul ignore file */
import React, { createContext, useEffect, useReducer } from "react"
import { get, post, setAuth } from "../utils/http"
import reducers from "./Reducers"
import { useToast } from "@chakra-ui/react"

export const DataContext = createContext({
  state: {},
  dispatch: () => null
})

export const DataProvider = ({ children }) => {
  const initialState = {
    auth: {},
    authReady: true,
    authType: "none",
    cart: [],
    products:[],
    requests:[]
  }
  const [state, dispatch] = useReducer(reducers, initialState)
  const { authType, cart } = state
  const toast = useToast()
  const showToast = errMessage => {
    toast({
      title: "Error al iniciar sesión.",
      description: `${errMessage}`,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true
    })
  }

  useEffect(() => {
    const logging = async () => {
      // TODO: console.log
      console.log("ejecutando efecto")
      const isLogged = localStorage.getItem("isLogged")
      const typeLogged = localStorage.getItem("typeLogged")
      if (isLogged) {
        try {
          // const accessToken = await post("/user/refresh_token", {})
          // //console.log("accessToken: ", accessToken)
          // console.log("accessToken: ", accessToken)
          // if (accessToken.data.msg === "Please login now") {
          //    localStorage.removeItem("isLogged")
          //    return showToast("Error con el token de acceso")
          // }
          // // console.log("setAuth: ", accessToken.data.access_token)
          // setAuth(accessToken.data.access_token)
          // const user = await get("/user/info")
          // if (user.data.msg === "Invalid authentication") {
          //    return showToast("Error al recuperar datos del usuario")
          // }
          // console.log('user: ',user)
          dispatch({
            type: "AUTH",
            payload: {
              access_token: "123456789abrocoa",
              user: {
                id: 1,
                us_correo: "sasisromero10@gmail.com",
                us_nombre: "Sebastiana",
                us_apellido: "Asis Romero",
                avatar: "",
                role:"admin"
                // posts: user.data.posts
              }
            }
          })
          // dispatch({
          //   type: "AUTH",
          //   payload: {
          //     access_token: accessToken.data.access_token,
          //     user: {
          //       id: user.data.id,
          //       createdAt: user.data.createdAt,
          //       updatedAt: user.data.updatedAt,
          //       us_correo: user.data.us_correo,
          //       us_nombre: user.data.us_nombre,
          //       us_apellido: user.data.us_apellido,
          //       avatar: user.data.avatar
          //       // posts: user.data.posts
          //     }
          //   }
          // })

         
          if (typeLogged === "normal") {
            dispatch({ type: "AUTH_TYPE", payload: "normal" })
          }
        } catch (err) {
          console.log("error: ", err)
        }
      }
    }
    dispatch({
      type: "GET_PRODUCTS",
      payload: [
        {
          id:1,
          categoria: "Chompas",
          nombre:"Chompita negra",
          marca:"TOYOTA",
          precio:12,
          imagen: "/slide1.png"
        },
        {
          id:2,
          categoria: "Calzados",
          nombre:"Chompita negra",
          marca:"ABOBA",
          precio:25,
          imagen: "/slide1.png"
        },
        {
          id:3,
          categoria: "Cueros",
          nombre:"Chompita negra",
          marca:"ANOHANA",
          precio:130,
          imagen: "/slide1.png"
        },
        {
          id:4,
          categoria: "Camisas",
          nombre:"Chompita negra",
          marca:"ASTRALIS",
          precio:158,
          imagen: "/slide1.png"
        },
        {
          id:5,
          categoria: "Chompas",
          nombre:"Chompita negra",
          marca:"SNK",
          precio:102,
          imagen: "/slide1.png"
        },
        {
          id:6,
          categoria: "Calzados",
          nombre:"Chompita negra",
          marca:"NVIDIA",
          precio:25,
          imagen: "/slide1.png"
        },
        {
          id:7,
          categoria: "Cueros",
          nombre:"AK-47",
          marca:"CSGO",
          precio:230,
          imagen: "/slide1.png"
        },
        {
          id:8,
          categoria: "Camisas",
          nombre:"Chompita negra",
          marca:"FORNITE",
          precio:18,
          imagen: "/slide1.png"
        },
      ]
    })
    logging()
    dispatch({
      type: "AUTH_READY",
      payload: true
    })
    // get("/api/category/categories")
    //   .then(categories => {
    //     dispatch({ type: "GET_CATEGORIES", payload: categories.data })
    //   })
    //   .catch(() => showToast("Error al recuperar categorias"))
  }, [authType])
  useEffect(() => {
    const __next__cart__ = JSON.parse(localStorage.getItem('__next__cart__'))

    if(__next__cart__) dispatch({ type: 'ADD_ALL_CART', payload: __next__cart__ })
  }, [])

  useEffect(() => {
    localStorage.setItem('__next__cart__', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
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
    categories: [],
    posts: []
  }
  const [state, dispatch] = useReducer(reducers, initialState)
  const { authType } = state
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

//   useEffect(() => {
//     const logging = async () => {
//       // TODO: console.log
//       console.log("ejecutando efecto")
//       const isLogged = localStorage.getItem("isLogged")
//       const typeLogged = localStorage.getItem("typeLogged")
//       if (isLogged) {
//         try {
//           const accessToken = await post("/api/user/refresh_token", {})
//           // TODO: console.log
//           console.log("accessToken: ", accessToken)
//           if (accessToken.data.status) {
//             localStorage.removeItem("isLogged")
//             return showToast("Error con el token de acceso")
//           }
//           // console.log("accessToken: ", accessToken.data.access_token)
//           // console.log("setAuth: ", accessToken.data.access_token)
//           setAuth(accessToken.data.access_token)
//           const user = await get("/api/user/info")
//           if (user.data.msg === "Autenticación inválida") {
//             return showToast("Error al recuperar datos del usuario")
//           }
//           dispatch({
//             type: "AUTH",
//             payload: {
//               access_token: accessToken.data.access_token,
//               user: {
//                 id: user.data.id,
//                 createdAt: user.data.createdAt,
//                 updatedAt: user.data.updatedAt,
//                 us_correo: user.data.us_correo,
//                 us_nombre: user.data.us_nombre,
//                 us_apellido: user.data.us_apellido,
//                 avatar: user.data.avatar
//                 // posts: user.data.posts
//               }
//             }
//           })

//           dispatch({
//             type: "POSTS",
//             payload: user.data.posts
//           })
//           if (typeLogged === "normal") {
//             dispatch({ type: "AUTH_TYPE", payload: "normal" })
//           }
//           if (typeLogged === "facebook") {
//             dispatch({ type: "AUTH_TYPE", payload: "facebook" })
//           }

//           if (typeLogged === "google") {
//             dispatch({ type: "AUTH_TYPE", payload: "google" })
//           }
//         } catch (err) {
//           console.log("error: ", err)
//         }
//       }
//       dispatch({
//         type: "AUTH_READY",
//         payload: true
//       })
//     }
//     logging()
//     get("/api/category/categories")
//       .then(categories => {
//         dispatch({ type: "GET_CATEGORIES", payload: categories.data })
//       })
//       .catch(() => showToast("Error al recuperar categorias"))
//   }, [authType])

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
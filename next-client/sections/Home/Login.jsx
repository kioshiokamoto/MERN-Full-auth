/* istanbul ignore file */
import {
    Text,
    Modal,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    ModalContent,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useDisclosure
  } from "@chakra-ui/react"
  import { useContext, useEffect, useState } from "react"
  import Link from "next/link"
//   import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
//   import GoogleLogin from "react-google-login"
  import ZIcon from "../../components/Icon/ZIcon"
  import { useForm } from "../../utils/hooks/useForm"
  import { useError } from "../../utils/hooks/useError"
  import { validLogin } from "./utils/valid"
  import { post } from "../../utils/http"
  import { DataContext } from "../../store/GlobalState"
  import showToast from "../../components/Toast"
    
  export default function Login({
    variant,
    width,
    showModalButtonText
  }) {
    // eslint-disable-next-line no-unused-vars
    const { state, dispatch } = useContext(DataContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isPosting, setIsPosting] = useState(false)
    const [values, handleInputChange, reset] = useForm({
      email: "",
      password: ""
    })
    const { email, password } = values
  
    const [errors, setErrors, resetErrors] = useError({
      name: "",
      lastName: "",
      email: "",
      password: ""
    })
  
    const handleSubmit = async e => {
      e.preventDefault()
      const { errors: errorsForm, isValid } = validLogin(values)
      setErrors(errorsForm)
      if (isValid) {
        setIsPosting(true)
        const res = await post("/api/user/login", {
          us_correo: values.email,
          password: values.password
        })
        setIsPosting(false)
        console.log("res.data Login: ", res.data)
        if (res.data.status) {
          showToast("Error al iniciar sesión.", res.data.message, "error")
        } else {
          // window.location.reload()
          dispatch({ type: "AUTH_TYPE", payload: "normal" })
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          localStorage.setItem("isLogged", true)
          localStorage.setItem("typeLogged", "normal")
        }
      }
    }
    // TODO: error en login fb y google
    // const handleFacebook = async res => {
    //   const { accessToken, userID } = res
    //   console.log("respues de libreria FB: ", res)
    //   try {
    //     const res = await post("/api/user/facebook_login", {
    //       accessToken,
    //       userID
    //     })
    //     console.log("resFB: ", res)
    //     if (res.data.status || res.data.error) {
    //       console.log("error en fb")
    //       showToast(
    //         "Error al iniciar sesión.",
    //         "No se pudo iniciar sesión con FB",
    //         "error"
    //       )
    //     } else {
    //       console.log("aparentemete correcto")
    //       dispatch({ type: "AUTH_TYPE", payload: "facebook" })
    //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       // @ts-ignore
    //       localStorage.setItem("isLogged", true)
    //       localStorage.setItem("typeLogged", "facebook")
    //     }
    //   } catch (err) {
    //     console.log("err: ", err)
    //   }
    // }
    // const handleGoogle = async res => {
    //   const { tokenId } = res
    //   console.log("respues de libreria Google: ", res)
    //   try {
    //     setIsPosting(true)
    //     const res = await post("/api/user/google_login", { tokenId })
    //     console.log("resGoogle: ", res)
    //     setIsPosting(false)
    //     if (res.data.status) {
    //       showToast("Error al iniciar sesión.", res.data.message, "error")
    //     } else {
    //       dispatch({ type: "AUTH_TYPE", payload: "google" })
    //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       // @ts-ignore
    //       localStorage.setItem("isLogged", true)
    //       localStorage.setItem("typeLogged", "google")
    //     }
    //   } catch (err) {
    //     console.log("err: ", err)
    //   }
    // }
  
    useEffect(() => {
      if (!isOpen) {
        reset()
        resetErrors()
      }
    }, [isOpen])
  
    return (
      <>
        <Button variant={variant} w={width} onClick={onOpen} color="letter">
          {showModalButtonText}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text align="center" color="letter">
                Inicio de sesión
              </Text>
            </ModalHeader>
            <ModalBody color="letter">
              <form onSubmit={handleSubmit}>
                <FormControl mb="6" isInvalid={!!errors.email}>
                  <FormLabel>Correo electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="P. ej. lilianasolar@gmail.com"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl mb="6" isInvalid={!!errors.password}>
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    type="password"
                    placeholder="P. ej. lilso21"
                    name="password"
                    onChange={handleInputChange}
                    value={password}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button
                  width="full"
                  variant="primary"
                  my={2}
                  type="submit"
                  className="buttonDisabledPrimary"
                  isLoading={isPosting}
                  color="letter"
                >
                  Inicia sesión
                </Button>
                {/* <Text fontSize="xs" color="primary" align="center">
                  O
                </Text>
                <FacebookLogin
                  appId="496057688285326"
                  autoLoad={false}
                  fields="name,email,picture"
                  // onClick={() => {}}
                  callback={res => {
                    handleFacebook(res)
                  }}
                  render={renderProps => (
                    <Button
                      leftIcon={<ZIcon name="facebookv2" />}
                      isFullWidth
                      my={2}
                      variant="facebook"
                      onClick={renderProps.onClick}
                    >
                      Inicia sesión con Facebook
                    </Button>
                  )}
                />
                <GoogleLogin
                  clientId="474899151330-hdavkur1j29cii1n65o2m23h682kem04.apps.googleusercontent.com"
                  render={renderProps => (
                    <Button
                      leftIcon={<ZIcon name="google" />}
                      isFullWidth
                      my={2}
                      variant="google"
                      onClick={renderProps.onClick}
                    >
                      Inicia sesión con Google
                    </Button>
                  )}
                  onSuccess={responseGoogleS => {
                    handleGoogle(responseGoogleS)
                  }}
                  onFailure={responseGoogleF =>
                    console.log("responseGoogleF: ", responseGoogleF)
                  }
                  cookiePolicy={"single_host_origin"}
                /> */}
                <Text className="bold600" fontSize="lg" align="center" my="3">
                  <Link href="/restablecer-contrasena">
                    <a>¿Olvido su contraseña?</a>
                  </Link>
                </Text>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
import Link from "next/link"
import styles from "../styles/components/Navbar.module.css"
import ZIcon from "../components/Icon"
import Register from "../sections/Home/Register"
import Login from "../sections/Home/Login"
import {
  Flex,
  Button,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { DataContext } from "../store/GlobalState"
import React, { useContext } from "react"
import { get } from "../utils/http"

export default function Navbar() {
  const router = useRouter()
  const activeRoute = router?.pathname.split("/")[1]
  const { state, dispatch } = useContext(DataContext)
  const { auth, authReady } = state

  const handleLogout = async () => {
    localStorage.removeItem("isLogged")
    await get("/api/user/logout")
    console.log("log out")
    dispatch({ type: "AUTH", payload: {} })
    // return router.push("/")
    return window.location.reload()
  }

  const loggedRouter = () => {
    return (
      // <ul>
      //   <Flex align="center" justify="center" mx="1">
      //     <Button variant="primary" width="4xs" onClick={handleLogout}>
      //       Log out
      //     </Button>
      //   </Flex>
      // </ul>
      <Flex align="center">
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Box px="4" position="relative">
              {/* <ZIcon name="ring" color="primary" size={20} pointer /> */}
              <Text cursor="pointer">Mis mensajes</Text>
              <Box
                h="2"
                w="2"
                bg="red"
                borderRadius="50"
                position="absolute"
                top="0.5"
                left="120px"
              ></Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent w="150" _focus={{ outline: "none" }}>
            <PopoverArrow />
            <PopoverCloseButton
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
            />
            <PopoverHeader>
              <Text color="gray">Mis notificaciones (3)</Text>
            </PopoverHeader>
            <PopoverBody>
              <Box h="200" overflow="auto" minW="xl">
                {[1, 2, 3, 4, 5, 6].map((notifElement, idx) => (
                  <Flex color="gray" align="center" py="1" minW="80" key={idx}>
                    <ZIcon name="avatar" color="primary" size={35} />
                    <Text px="4">
                      <b style={{ color: "var(--secondary)" }}>Juancho</b> - Se
                      acaba de publicar un evento:{" "}
                      <b style={{ color: "var(--secondary)" }}>Matrimonio</b>
                    </Text>
                  </Flex>
                ))}
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Box px="4">
              <ZIcon name="avatar" color="primary" size={25} pointer />
            </Box>
          </PopoverTrigger>
          <PopoverContent w="38" _focus={{ outline: "none" }}>
            <PopoverArrow />
            <PopoverBody d="flex" alignItems="center" flexDirection="column">
              <Button
                variant="secondary"
                w="100px"
                onClick={() => {
                  router.push("/mostrar-datos")
                }}
                my="2"
              >
                Perfil
              </Button>

              <Button variant="primary" w="100px" onClick={handleLogout} my="2">
                Log out
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    )
  }

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarWrapper}>
        <div>
          <Link href="/">
            <a>
              <ZIcon name="logo" />
            </a>
          </Link>
        </div>
        <ul>
          <li className={`${activeRoute === "" && styles.active}`} id="home">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* <li
            className={`${activeRoute === "explorar" && styles.active}`}
            id="explorar"
          >
            <Link href="/explorar">
              <a>Explorar anuncio</a>
            </Link>
          </li>
          <li
            className={`${activeRoute === "publicar" && styles.active}`}
            id="publicar"
          >
            <Link href="/publicar">
              <a href="">Publicar</a>
            </Link>
          </li> */}
        </ul>
        {authReady ? (
          <>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {Object.keys(auth).length === 0 ? (
              <ul>
                <Flex align="center" justify="center" mx="1">
                  <Login
                    variant="light"
                    width="4xs"
                    showModalButtonText=" Inicio Sesión"
                  />
                </Flex>
                <Flex align="center" justify="center">
                  <Register
                    variant="primary"
                    width="4xs"
                    showModalButtonText="Registrate"
                  />
                </Flex>
              </ul>
            ) : (
              loggedRouter()
            )}
          </>
        ) : (
          <Box>
            <Text>Entrando ...</Text>
          </Box>
        )}
      </nav>
    </div>
  )
}
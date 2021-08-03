import { Text, Flex, Button } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import styles from "../../styles/sections/ActiveMessage.module.css"
export default function ActiveAccount({ router }) {
  return (
    <div
      className={styles.infoContainer}
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className={styles.infoWrapper}>
        <Flex direction="column" align="center" justify="center">
          <ZIcon name="logo" color="icon" size={20} />
          <Text
            fontSize="4xl"
            align="center"
            color="letter"
            fontWeight="medium"
          >
            ¡ Se confirmo su registro !
          </Text>

          <Text fontSize="2xl" align="center" color="letter" my="2">
            Gracias por unirse a contactec, ahora puede iniciar sesión y
            adquirir cualquiera de nuestros productos
          </Text>
          <Button
            onClick={() => {
              router.push("/")
            }}
            variant="secondary"
            my="4"
          >
            Iniciar sesion
          </Button>
        </Flex>
      </div>
    </div>
  )
}

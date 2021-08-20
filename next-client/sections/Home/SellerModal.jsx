/* istanbul ignore file */
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import {
  Text,
  ModalHeader,
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  useDisclosure,
  Textarea
} from "@chakra-ui/react"
import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validSeller } from "./utils/valid"
import { post } from "../../utils/http"
import showToast from "../../components/Toast"
import { toCapitalFirstLetter } from "../../utils/toCapital"

// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta
export default function SellerModal({
  variant,
  width,
  showModalButtonText,
  ...props
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const router = useRouter()
  const [values, handleInputChange, reset] = useForm({
    name: "",
    brand: "",
    email: "",
    phone: "",
    message:""
  })
  const { name, brand, email, phone, message } = values

  const [errors, setErrors, resetErrors] = useError({
    name: "",
    brand: "",
    email: "",
    phone: "",
    message:""
  })

  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validSeller(values)
    setErrors(errorsForm)
    if (isValid) {
      setIsPosting(true)
    //   const resp = await post("/api/user/register", {
    //     us_correo: values.email,
    //     us_nombre: values?.name,
    //     us_apellido: values?.lastName,
    //     password: values.password
    //   })
      setIsPosting(false)

      // if (resp.data.response?.error) {
      //   showToast("Error al solcitar ser vendedor", resp.data.response?.error, "error")
      // } 
    }
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
      resetErrors()
    }
  }, [isOpen])

  return (
    <>
      <Button variant={variant} w={width} onClick={onOpen}  color="letter" {...props}>
        {showModalButtonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay  />
        <ModalContent>
          <ModalHeader>
            <Text align="center" color="letter">
              Solicitar ser vendedor
            </Text>
          </ModalHeader>

          <ModalBody color="letter">
            <form onSubmit={handleSubmit}>
              <FormControl mb="6" id="first-name" isInvalid={!!errors.name}>
                <FormLabel>Nombre del vendedor</FormLabel>
                <Input
                  type="text"
                  placeholder="P. ej. Liliana Alexandra"
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl mb="6" isInvalid={!!errors.brand}>
                <FormLabel>Nombre de la marca</FormLabel>

                <Input
                  type="text"
                  placeholder="P. ej. Solar Rojas" // eslint-disable-next-line camelcase
                  name="brand"
                  onChange={handleInputChange}
                  value={brand}
                />
                <FormErrorMessage>{errors.brand}</FormErrorMessage>
              </FormControl>

              <FormControl mb="6" isInvalid={!!errors.email}>
                <FormLabel>Correo electrónico</FormLabel>
                <Input
                  type="text"
                  placeholder="P. ej. lilianasolar@gmail.com"
                  name="email"
                  onChange={handleInputChange}
                  value={email}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl mb="6" isInvalid={!!errors.phone}>
                <FormLabel>Numero telefónico</FormLabel>

                <Input
                  type="text"
                  placeholder="P. ej. lilso21"
                  name="phone"
                  onChange={handleInputChange}
                  value={phone}
                />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.message}>
                <FormLabel >
                  Mensaje
                </FormLabel>

                <Textarea
                  fontSize="sm"
                  placeholder="Escribe aquí el motivo"
                  onChange={handleInputChange}
                  name="message"
                  value={toCapitalFirstLetter(message)}
                  h="100"
                  maxLength={200}
                  resizable="false"
                />

                <Box
                  d="flex"
                  justifyContent="space-between"
                  color="gray"
                  fontSize="xs"
                >
                  {!errors.message && <Box w="3"></Box>}
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                  <span style={{ paddingTop: "10px" }}>
                    {message.length}/200
                  </span>
                </Box>
              </FormControl>
             
              <Button
                width="full"
                variant="primary"
                my={2}
                type="submit"
                isLoading={isPosting}
                className="buttonDisabledPrimary"
                color="letter"
              >
                Solicitar
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
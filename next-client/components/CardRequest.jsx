import {
    Text,
    Box
  } from "@chakra-ui/react"
export default function CardRequest() {
    return (
        <Box p="6" borderRadius="3xl" bg="whiteAlpha.800" width="90%">
            <Text fontSize="3xl" fontWeight="medium" color="letter" py="2">ANOHONA</Text>
            <Text textAlign="start" fontWeight="medium" color="letter"py="2">Vendedor</Text>
            <Text textAlign="start" fontWeight="light" color="letter">Caminla rojas</Text>
            <Text textAlign="start" fontWeight="medium" color="letter" py="2">Correo electronico</Text>
            <Text textAlign="start" fontWeight="light" color="letter">camionla@gmail.com</Text>
            <Text textAlign="start" fontWeight="medium" color="letter" py="2">Mensaje</Text>
            <Box height="200px" overflowY="auto">
                <Text textAlign="start" fontWeight="light" color="letter">Lorem ipdfsf?</Text>
            </Box>
        </Box>
    )
}

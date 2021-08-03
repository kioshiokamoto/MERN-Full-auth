import {
    Text,
    Box,
    Flex,
    Circle
  } from "@chakra-ui/react"
  import ZIcon from './Icon'
export default function CardRequest() {
    return (
      <Box p="6" borderRadius="3xl" bg="whiteAlpha.900" width="90%" height="100%">
        <Text fontSize="3xl" fontWeight="medium" color="letter" py="2">
          ANOHONA
        </Text>
        <Text textAlign="start" fontWeight="medium" color="letter" py="2">
          Vendedor
        </Text>
        <Text textAlign="start" fontWeight="light" color="letter">
          Caminla rojas
        </Text>
        <Text textAlign="start" fontWeight="medium" color="letter" py="2">
          Correo electronico
        </Text>
        <Text textAlign="start" fontWeight="light" color="letter">
          camionla@gmail.com
        </Text>
        <Text textAlign="start" fontWeight="medium" color="letter" py="2">
          Mensaje
        </Text>
        <Box overflowY="auto" height="155px">
          <Text textAlign="start" fontWeight="light" color="letter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime molestias et quos inventore neque saepe, fuga dolor rem delectus ad magni repellat rerum enim ipsa aperiam ipsam excepturi recusandae debitis pariatur voluptates. Aut pariatur, laborum harum eum dolor nam. Alias, similique officia neque illo quia iste! Molestiae rerum doloremque necessitatibus at ad, esse alias, animi atque provident libero asperiores soluta suscipit hic vel nisi officiis ut ex culpa, modi repellat consequuntur vero eos beatae voluptates. Quibusdam nostrum amet debitis!
          </Text>
        </Box>
        <Flex justify="flex-end">
          <Circle
            w="45px"
            h="45px"
            backgroundColor="gray.300"
            boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
            cursor="pointer"
            d="flex"
            justifyContent="center"
            alignItems="center"
            mx="2"
            my="3"
          >
            <ZIcon name="check" color="icon" size={20} />
          </Circle>
          <Circle
            w="45px"
            h="45px"
            backgroundColor="primary"
            boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
            cursor="pointer"
            d="flex"
            justifyContent="center"
            alignItems="center"
            my="3"
          >
            <ZIcon name="wp" color="icon" size={25} />
          </Circle>
        </Flex>
      </Box>
    );
}

import { Flex, useNumberInput, HStack,Box,Text,Button,Input } from "@chakra-ui/react"
import Image from 'next/image'
export default function ItemCart() {

    const {
        value,
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
      } = useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 100,
      })
    
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    const handleIncrement = () =>{ 
        console.log('value: ', value)
    }
    const handleDecrement= () =>{ 
        console.log('value: ', value)
    }


    return (
        <Flex border="solid 1px #cccccc" borderRadius="xl" p="5" my="2" align="center" justify="space-between">
            <Image src="/slide1.png" alt="Picture" height="80" width="80" />
            <Box>
                <Text fontSize="sm" color="letter">Chompa negra mujer</Text>
                <Text fontSize="sm" color="letter">Marca: AHINA</Text>
                <Text fontSize="lg" color="primary">S/. 70.00</Text>
            </Box>
            <HStack w="150px">
                <Button {...inc} size="sm" onClick={handleIncrement}>+</Button>
                <Input {...input} textAlign="center"/>
                <Button {...dec} size="sm" onClick={handleDecrement}>-</Button> 
            </HStack>
        </Flex>
    )
}

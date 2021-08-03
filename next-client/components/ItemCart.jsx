import { Flex, useNumberInput, HStack,Box,Text,Button,Input } from "@chakra-ui/react"
import Image from 'next/image'
import { useContext, useEffect, useRef } from "react"
import { DataContext } from "../store/GlobalState"
import ZIcon from './Icon'
export default function ItemCart({productCart}) {
    const { dispatch } = useContext(DataContext)
    const isMount = useRef(true)
    const {
        value,
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
      } = useNumberInput({
        step: 1,
        defaultValue: productCart.cantidad,
        min: 1,
        max: 100,
      })
    
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    const handleIncrement = () =>{ 
        console.log('value: ', value)
        dispatch({type:'INCREASE_NUMBER_PRODUCT', payload: productCart})

    }
    const handleDecrement= () =>{ 
        dispatch({type:'DECREASE_NUMBER_PRODUCT', payload: productCart})
    }

    const handleDeleteItem = () =>{
        dispatch({type:'DELETE_CART', payload: productCart.id})
    }

    return (
        <Flex border="solid 1px #cccccc" borderRadius="xl" p="5" my="2" align="center" justify="space-between">
            <Image src={productCart.imagen} alt="Picture" height="80" width="80" />
            <Box>
                <Text fontSize="sm" color="letter">{productCart.nombre}</Text>
                <Text fontSize="sm" color="letter">Marca: {productCart.marca}</Text>
                <Text fontSize="lg" color="primary">S/. {productCart.precio}</Text>
            </Box>
            <HStack w="150px">
                <Button {...inc} size="sm" onClick={handleIncrement}>+</Button>
                <Input {...input} textAlign="center" />
                <Button {...dec} size="sm" onClick={handleDecrement}>-</Button> 
            </HStack>
            <ZIcon name="trash" pointer color="primary" onClick={handleDeleteItem}/>
        </Flex>
    )
}

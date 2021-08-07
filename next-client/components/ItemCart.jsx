import { Flex, useNumberInput, HStack,Box,Text,Button,Input } from "@chakra-ui/react"
import Image from 'next/image'
import { useContext,useState,} from "react"
import { DataContext } from "../store/GlobalState"
import ZIcon from './Icon'
export default function ItemCart({productCart}) {
    const { dispatch } = useContext(DataContext)
    const [cantidad, setCantidad] = useState(productCart.cantidad)
    const handleIncrementCustom = () =>{ 
        setCantidad(cantidad + 1)
        dispatch({type:'INCREASE_NUMBER_PRODUCT', payload: productCart})

    }
    const handleDecrementCustom= () =>{ 
        setCantidad(cantidad - 1)
        dispatch({type:'DECREASE_NUMBER_PRODUCT', payload: productCart})
    }

    const handleDeleteItem = () =>{
       dispatch({type:'DELETE_CART', payload: productCart._id})
    }

    return (
        <Flex border="solid 1px #cccccc" borderRadius="xl" p="5" my="2" align="center" justify="space-between">
            <Image src={productCart.image} alt="Picture" height="80" width="80" />
            <Box w="72">
                <Text fontSize="sm" color="letter">{productCart.nombre}</Text>
                <Text fontSize="sm" color="letter">Marca: {productCart.marca}</Text>
                <Text fontSize="lg" color="primary">S/. {productCart.precio}</Text>
            </Box>
            {/* <HStack w="150px">
                <Button {...inc} size="sm" onClick={handleIncrement}>+</Button>
                <Input {...input} textAlign="center" />
                <Button {...dec} size="sm" onClick={handleDecrement}>-</Button> 
            </HStack> */}
            <Flex>
                <Button variant="primary"color="letter"onClick={handleIncrementCustom} disabled={cantidad===100} className="buttonDisabledPrimary">+1</Button>
                <Input textAlign="center" readOnly w="14" value={cantidad} mx="1"/>
                <Button variant="primary" color="letter" onClick={handleDecrementCustom} disabled={cantidad===1} className="buttonDisabledPrimary">-1</Button>
            </Flex>
            <ZIcon name="trash" pointer color="primary" onClick={handleDeleteItem}/>
        </Flex>
    )
}

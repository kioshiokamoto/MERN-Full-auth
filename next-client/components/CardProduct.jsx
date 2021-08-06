import {
    Text,
    Box,
    Flex,
    Circle
  } from "@chakra-ui/react"
import {toCapitalFirstLetter} from '../utils/toCapital'
import Link from "next/link"
import Image from "next/image"
import ZIcon from './Icon'
import { useContext, useState } from "react"
import Dialog from "./Dialog"
import ProductModal from './../sections/Home/ProductModal'
import { DataContext } from "../store/GlobalState"
import showToast from "./Toast"
import { del, setAuth } from "../utils/http"
export default function CardProduct({ product, role="user" }) {
    const [openDialog, setOpenDialog] = useState(false)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const { state, dispatch } = useContext(DataContext)
    const { auth, cart } = state


    const handleClick = () => {
        console.log('click')
        setOpenDialog(true)
    }
    const handleAddCart = (result)=>{
        if(result=== true){
            if(Object.keys(auth).length === 0){
                setOpenDialog(false)
                return (showToast("Problemas con el producto","Necesita iniciar sesion","error")) 
            }
            console.log('agregado')
            const check = cart.every(item => {
                return item._id !== product._id
            })
            console.log('mostro el toast')
            if(!check) {
                setOpenDialog(false)
                return (showToast("Cuidado","Elemento ya se encuentra en el carrrito","info")) 
            }
            dispatch({ type: 'ADD_CART', payload: {...product, cantidad:1}})
            setOpenDialog(false)
            showToast("Operacion exitosa","Elemento ha sido agregado al carrito","success")
        }else if(result===false){
            setOpenDialog(false)
        }
    }

    const handleDelete =()=> {
        console.log('click')
        setOpenDeleteDialog(true)
    }

    const handleDeleteProduct = async(result) => {
        if(result=== true){
            console.log('eliminado')
            setAuth(auth.access_token)
            const res = await del(`/post/${product._id}`)
            dispatch({ type: "DELETE_PRODUCT", payload: product._id })
            setOpenDeleteDialog(false)
            console.log("delete: ", res)
        }else if(result===false){
            setOpenDeleteDialog(false)
        }
    }
    return (
        <Box borderRadius="3xl" overflow="hidden" mx="3" backgroundColor="white" my="4"boxShadow="lg">
            <Box position="relative">
                <Link
                href="/"
                as={`/`}
                >
                <a>
                    <Image
                    src= {product?.image || '/slide1.png'}
                    alt='imagen'
                    height="500"
                    width="500"
                    />
                </a>
                </Link>
                <Text position="absolute" bg="primary" color="letter" top="4" left="4" py="1" px="2" borderRadius="xl">{product?.categoria}</Text>
                <Flex
                align="flex-start"
                justify="center"
                w="full"
                px="4"
                py="2"
                direction="column"
                >
                    {/* <Flex align="center" w="40px" justify="space-between">
                        <ZIcon name="star" color="secondary" />
                        <Text fontSize="sm" fontWeight="semibold" color="letter">
                        4.0
                        </Text>
                    </Flex>
                 */}
                    <Text fontSize="sm" fontWeight="medium" color="letterSecondary">
                    {product?.nombre}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="letterSecondary">
                        Marca: {product?.marca}
                    </Text>
                    
                </Flex>
            </Box>
          
            <Box px="4" pb="5">
                <Flex align="center" justify="space-between">
                    <Flex align="flex-start" justify="flex-start" direction="column">
                        <Text fontSize="xs" fontWeight="normal" color="letter" textDecoration="line-through">
                        {product?.precio + 30}
                        </Text>
                        <Text fontSize="lg">S/. {product?.precio}</Text>
                    </Flex> 
                    {
                        role !== "admin" ?
                        (
                            <Circle
                                w="45px"
                                h="45px"
                                backgroundColor="primary"
                                boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
                                cursor="pointer"
                                onClick={handleClick}
                                
                                >
                                <ZIcon name="cart" color="icon" size={20}/>
                            </Circle>
                        )
                        :
                        (
                            <Box d="flex">
                                <Circle
                                w="45px"
                                h="45px"
                                backgroundColor="gray.200"
                                boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
                                cursor="pointer"
                                mx="2"
                                onClick={handleDelete}
                                
                                >
                                    <ZIcon name="trash" color="icon" size={20}/>
                                </Circle>
                                <ProductModal icon myproduct={product}/>
                            </Box>
                        )
                    }
                    
                </Flex>
            </Box>
            {
                openDialog &&  (
                    <Dialog title="Agregar producto" icon="cart" content={<>¿Está seguro que desea agregar al carrito el
                        producto <b>{product?.nombre}?</b></>} accept="Sí, agregar" callbackFunction={handleAddCart}/>
                )
            }

            {
                openDeleteDialog && (
                    <Dialog title="Eliminar producto" icon="trash" color="danger" content={<>¿Está seguro que desea eliminar el producto <b>{product?.nombre}?</b></>} accept="Sí, eliminar" callbackFunction={handleDeleteProduct}/>
                )
            }
        </Box>
    )
}

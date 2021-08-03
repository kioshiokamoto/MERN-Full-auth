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
import { useState } from "react"
import Dialog from "./Dialog"
import ProductModal from './../sections/Home/ProductModal'
export default function CardProduct({role}) {
    const [openDialog, setOpenDialog] = useState(false)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)


    const handleClick = () => {
        console.log('click')
        setOpenDialog(true)
    }
    const handleAddCart = (result)=>{
        if(result=== true){
            console.log('agregado')
        }else if(result===false){
            setOpenDialog(false)
        }
    }

    const handleDelete =()=> {
        console.log('click')
        setOpenDeleteDialog(true)
    }

    const handleDeleteProduct = (result) => {
        if(result=== true){
            console.log('eliminado')
        }else if(result===false){
            setOpenDeleteDialog(false)
        }
    }
    return (
        <Box borderRadius="3xl" overflow="hidden" mx="3" backgroundColor="white" my="4"boxShadow="lg">
            <Box position="relative">
                <Link
                href="/"
                as={`/}`}
                >
                <a>
                    <Image
                    src= "/slide1.png"
                    alt='imagen'
                    height="500"
                    width="500"
                    />
                </a>
                </Link>
                <Text position="absolute" bg="primary" color="letter" top="4" left="4" py="1" px="2" borderRadius="xl">Chompas</Text>
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
                    Chompa negra mujer
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="letterSecondary">
                        Marca: NAHARA
                    </Text>
                    
                </Flex>
            </Box>
          
            <Box px="4" pb="5">
                <Flex align="center" justify="space-between">
                    <Flex align="flex-start" justify="flex-start" direction="column">
                        <Text fontSize="xs" fontWeight="normal" color="letter" textDecoration="line-through">
                        S/. 120.00
                        </Text>
                        <Text fontSize="lg">S/. 70.00</Text>
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
                                <ZIcon name="cart" color="icon" />
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
                                <ProductModal icon/>
                            </Box>
                        )
                    }
                    
                </Flex>
            </Box>
            {
                openDialog &&  (
                    <Dialog title="Agregar producto" icon="cart" content={<>¿Está seguro que desea agregar al carrito el
                        producto <b>Chompa negra mujer?</b></>} accept="Sí, agregar" callbackFunction={handleAddCart}/>
                )
            }

            {
                openDeleteDialog && (
                    <Dialog title="Eliminar producto" icon="trash" color="danger" content={<>¿Está seguro que desea eliminar el producto <b>Chompa negra mujer?</b></>} accept="Sí, eliminar" callbackFunction={handleDeleteProduct}/>
                )
            }
        </Box>
    )
}

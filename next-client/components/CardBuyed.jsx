import {
    Text,
    Box,
    Flex,
  } from "@chakra-ui/react"

import Link from "next/link"
import Image from "next/image"
export default function CardBuyed({product}) {
  
    return (
        <Box borderRadius="3xl" overflow="hidden" mx="3" backgroundColor="white" my="4"boxShadow="lg">
            <Box position="relative">
                <Link
                href="/"
                as={`/`}
                >
                <a>
                    <Image
                    src= {product.image}
                    alt='imagen'
                    height="500"
                    width="500"
                    />
                </a>
                </Link>
                <Text position="absolute" bg="primary" color="letter" top="4" left="4" py="1" px="2" borderRadius="xl">{product.categoria}</Text>
                <Flex
                align="flex-start"
                justify="center"
                w="full"
                px="4"
                py="2"
                direction="column"
                >
                    <Text fontSize="sm" fontWeight="medium" color="letterSecondary">
                    {product.nombre}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" color="letterSecondary">
                        Marca: {product.marca}
                    </Text>
                    
                </Flex>
            </Box>
          
            <Box px="4" pb="5">
                <Flex align="center" justify="flex-end">
                        <Text fontSize="lg" fontWeight="medium">S/. {product.precio}</Text>
                </Flex>       
            </Box>
        </Box>
    )
}

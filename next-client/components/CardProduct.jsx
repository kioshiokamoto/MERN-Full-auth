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
export default function CardProduct() {
    return (
        <Box borderRadius="3xl" overflow="hidden" mx="3" backgroundColor="white" my="4"boxShadow="lg">
            <Box>
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
            <Link
                href="/"
                as={`/`}
            >
                <a>
                <Box px="4" pb="5">
                    <Flex align="center" justify="space-between">
                        <Flex align="flex-start" justify="flex-start" direction="column">
                            <Text fontSize="xs" fontWeight="normal" color="letter" textDecoration="line-through">
                            S/. 120.00
                            </Text>
                            <Text fontSize="lg">S/. 70.00</Text>
                        </Flex> 
                        <Circle
                            w="45px"
                            h="45px"
                            backgroundColor="primary"
                            boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
                            cursor="pointer"
                            
                            >
                            <ZIcon name="cart" color="icon" />
                        </Circle>
                    </Flex>
                </Box>
                </a>
            </Link>
        </Box>
    )
}

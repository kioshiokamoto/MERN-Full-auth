import {
    Box, Flex,Text, Button
  } from "@chakra-ui/react"
import Image from 'next/image'
import ZIcon from '../../components/Icon'
// import SellerModal from "./SellerModal"
export default function Hero() {
    return (
        <Box background="primary" py="50">
            <Box className="generalWrapper flexCenterCustom" position="relative" w="1100" h="400">
                <Image
                    className="imagePost"
                    src="/farmacia.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    objectPosition = "top"
                />
                <style jsx global>{`
                    .imagePost {
                        border-radius: 50px;
                    }
                `}</style>
                <Box position="absolute" top="20" right="20">
                    <Flex direction="column" w="80" p="2" >
                        <Text color="letter" fontSize="5xl" letterSpacing="widest" fontWeight="medium">ESMEDI</Text>
                        <Text color="letter" fontSize="lg" fontWeight="medium">Encuentra los mejores precios en tu farmacia condiable</Text>
                        {/* <Button variant="primary" color="letter" fontWeight="normal" my="4">Solicitar ser vendedor <ZIcon name="wp" color="icon" className="mx2"/></Button> */}
                        {/* <SellerModal showModalButtonText="Solicitar ser vendedor" variant="primary" color="letter" fontWeight="normal" my="4"/> */}
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

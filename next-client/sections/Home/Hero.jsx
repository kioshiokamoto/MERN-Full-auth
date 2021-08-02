import {
    Box, Flex,Text, Button
  } from "@chakra-ui/react"
import Image from 'next/image'
import SellerModal from "./SellerModal"
export default function Hero() {
    return (
        <Box background="primary" py="50">
            <Box className="generalWrapper flexCenterCustom" position="relative" w="1100" h="400">
                <Image
                    className="imagePost"
                    src="/slide1.png"
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
                <Box position="absolute" top="20" left="20">
                    <Flex direction="column" w="80" p="2" >
                        <Text color="primary" fontSize="5xl" letterSpacing="widest" fontWeight="medium">ZONALI</Text>
                        <Text color="letter" fontSize="lg" fontWeight="medium">Vende tus prendas en un solo lugar !Empieza a publicar hoy!</Text>
                        <SellerModal showModalButtonText="Solicitar ser vendedor" variant="primary" color="letter" fontWeight="normal" my="4"/>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

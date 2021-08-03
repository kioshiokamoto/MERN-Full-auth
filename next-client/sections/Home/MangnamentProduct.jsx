
import {
    Text,
    Box,
    Grid,
    Flex
  } from "@chakra-ui/react"
import CardProduct from "../../components/CardProduct"
import ProductModal from "./ProductModal"
export default function MangnamentProduct() {
    return (
        <Box bg="primary">
            <Box className="generalWrapper">
                <Text textAlign="center" pt="10" pb="5" fontSize="2xl" fontWeight="medium" color="letter">Administrar productos</Text>
                <Flex align="center" justify="center" pb="5">
                    <ProductModal variant="secondary" showModalButtonText="Nuevo" width="3xs"/>
                </Flex>
            
                <Grid templateColumns="repeat(4,1fr)">
                    {
                        [1,2,3,4].map( (product, index) => {
                            return (
                                <CardProduct key={index} role="admin"/>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

import CardProduct from "../../components/CardProduct";
import {
    Text,
    Box, 
    Grid
  } from "@chakra-ui/react"
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
export default function Products({products}) {
    const { state } = useContext(DataContext)
    const { auth } = state
    // const { auth, products } = state
    return (
        <Box backgroundColor="primary" pb="10">
            <Box className="generalWrapper">
                <Text color="letter" fontSize="2xl" align="center" py="6" fontWeight="medium">Nuestros productos</Text>
                <Grid templateColumns="repeat(4,1fr)">
                    {
                        products.length > 0 ? (
                            products?.map( product => (
                                <CardProduct key={product.id} product={product} role={auth.user?.role}/>
                            ))
                        ) : <p>No hay productos</p>
                    }
                </Grid>
            </Box >
        </Box>
    )
}

import CardProduct from "../../components/CardProduct";
import {
    Text,
    Box, 
    Grid
  } from "@chakra-ui/react"
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
export default function Products() {
    const { state } = useContext(DataContext)
    const { auth, products } = state
    // const { auth, products } = state
    return (
        <Box backgroundColor="primary" pb="10">
            <Box className="generalWrapper">
                <Text color="letter" fontSize="2xl" left="20px" py="6" fontWeight="medium">Medicamentos</Text>
                <Grid templateColumns="repeat(4,1fr)">
                    {
                        products.length > 0 ? (
                            products?.map( product => (
                                <CardProduct key={product.id} product={product} role={auth.user?.role}/>
                            ))
                        ) : <p>No hay medicamentos registrados</p>
                    }
                </Grid>
            </Box >
            <Box className="generalWrapper">
                <Text color="letter" fontSize="2xl" left="20px" py="6" fontWeight="medium">Protección COVID 19</Text>
                <Grid templateColumns="repeat(4,1fr)">
                    {
                        products.length > 0 ? (
                            products?.map( product => (
                                <CardProduct key={product.id} product={product} role={auth.user?.role}/>
                            ))
                        ) : <p>No hay medicamentos registrados</p>
                    }
                </Grid>
            </Box >
        </Box>
    )
}

import CardProduct from "../../components/CardProduct";
import {
    Text,
    Box, 
    Grid
  } from "@chakra-ui/react"
export default function Products() {
    return (
        <Box backgroundColor="primary" pb="10">
            <Box className="generalWrapper">
                <Text color="letter" fontSize="2xl" align="center" py="6" fontWeight="medium">Nuestros productos</Text>
                <Grid templateColumns="repeat(4,1fr)">
                    {
                        [1,2,3,4,5,6,7,8,9].map( product => (
                            <CardProduct/>
                        ))
                    }
                </Grid>
            </Box >
        </Box>
    )
}

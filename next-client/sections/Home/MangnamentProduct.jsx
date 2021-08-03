
import {
    Text,
    Box,
    Grid,
    Flex
  } from "@chakra-ui/react"
import CardProduct from "../../components/CardProduct"
import ProductModal from "./ProductModal"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import { useContext } from "react"
import { DataContext } from "../../store/GlobalState"
SwiperCore.use([Autoplay, Navigation])
export default function MangnamentProduct() {
    const { state } = useContext(DataContext)
    const { auth, products } = state
    return (
        <Box bg="primary">
            <Box className="generalWrapper">
                <Text textAlign="center" pt="10" pb="5" fontSize="2xl" fontWeight="medium" color="letter">Administrar productos</Text>
                <Flex align="center" justify="center" pb="5">
                    <ProductModal variant="secondary" showModalButtonText="Nuevo" width="3xs"/>
                </Flex>
            
                <Swiper
                  slidesPerView={4}
                  spaceBetween={-5}
                  navigation
                  loop={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                  }}
                  breakpoints={{
                    // when window width is >= 640px
                    100: {
                      slidesPerView: 1
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2
                    },
                    1000: {
                      slidesPerView: 4
                    }
                  }}
                  className="mySwiperSlideTwo"
                >
                    {
                        products.map( (product, index) => {
                            return (
                                <SwiperSlide key={product.id}>
                                    <CardProduct role={auth.user.role} product={product}/>
                                </SwiperSlide>
                            )
                        })
                    }
               </Swiper>
            </Box>
        </Box>
    )
}

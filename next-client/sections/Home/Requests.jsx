import {
    Text,
    Box
  } from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
SwiperCore.use([Autoplay, Navigation])
import CardRequest from "../../components/CardRequest"
export default function Requests() {
    return (
        <Box bg="primary">
            <Box className="generalWrapper" >
                <Text fontSize="2xl" textAlign="center" color="letter" fontWeight="medium" pt="16" pb="8">Mis solicitudes</Text>
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
                  className="mySwiperSlideOne"
                >
                  {[1,2,3,4,5].map((item, index) => (
                    <SwiperSlide key={index}>
                      <CardRequest/>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </Box>
        </Box>
    )
}

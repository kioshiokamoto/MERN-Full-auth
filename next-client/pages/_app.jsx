import "../styles/globals.css"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"
import { ChakraProvider } from "@chakra-ui/react"
import { DataProvider } from "../store/GlobalState"
import { newTheme } from "../styles/theme"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ChakraProvider>
  )
}

export default MyApp

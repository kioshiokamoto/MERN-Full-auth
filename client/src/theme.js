import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from "./components/buttonStyles"
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  xs: "320px",
  sm: "560px",
  md: "768px",
  lg: "960px",
  xl: "1200px"
})
export const newTheme = extendTheme({
  breakpoints,
  colors: {
    primary: "#482F51",
    secondary: "#FBD76D",
    highlight: "#00C9A7",
    circleicons: "#E1E9F0",
    letter: "#525252",
    danger: "#EF4444",
    warning: "#FCD34D",
    success: "#34D399",
    info: "#3B82F6"
  },
  components: {
    Button
  }
})
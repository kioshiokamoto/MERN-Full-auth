import { createStandaloneToast } from "@chakra-ui/react"
const toast = createStandaloneToast()

export default function showToast(title, message, type) {
  toast({
    title: `${title}`,
    description: `${message}`,
    position: "top",
    // @ts-ignore
    status: `${type}`,
    duration: 1500,
    isClosable: true
  })
}
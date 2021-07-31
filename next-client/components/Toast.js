import { createStandaloneToast } from "@chakra-ui/react"
const toast = createStandaloneToast()

export default function showToast(title, message, type) {
  console.log("toast")
  toast({
    title: `${title}`,
    description: `${message}`,
    position: "top",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    status: `${type}`,
    duration: 9000,
    isClosable: true
  })
}
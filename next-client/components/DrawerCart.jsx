import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text,
    Flex
  } from "@chakra-ui/react"
import {useRef} from 'react'
import ZIcon from './Icon'
export default function DrawerCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button colorScheme="blue" onClick={onOpen} ref={btnRef}>
          Open
        </Button>
        <Drawer isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton _focus={{outline:'none'}}/>
            <DrawerHeader borderBottomWidth="1px">
                <Flex align="center" justify="center" py="10">  
                    <ZIcon name="cart" color="primary" size={40}/> 
                    <Text px="2" fontWeight="light">Carrito de compras</Text>
                </Flex>
            </DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
            <DrawerFooter>
                <Button type="submit" form="my-form" variant="primary" color="letter" isFullWidth>
                Efectuar compra
                </Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </>
    )
}
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
    Flex,
    Circle,
    Box, 
    Input,
    InputGroup,
    InputLeftAddon
  } from "@chakra-ui/react"
import {useContext, useRef, useState} from 'react'
import { DataContext } from "../store/GlobalState"
import BuyModal from "./BuyModal"
import ZIcon from './Icon'
import ItemCart from "./ItemCart"
export default function DrawerCart({icon}) {

  const [openBuyModal, setOpenBuyModal] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { state } = useContext(DataContext)
  const { cart } = state
  const handleBuy = () =>{
    setOpenBuyModal(true)
  }

  const handlePay = (result)=>{
    if(result === true){
      console.log('comprado')
    }else if(result === false){
    setOpenBuyModal(false)
    }
  }

    return (
      <>
        {/* <Button colorScheme="blue" onClick={onOpen} ref={btnRef}>
          Open
        </Button> */}
        <Circle
            ref={btnRef}
            onClick={onOpen}
            w="40px"
            h="40px"
            backgroundColor="primary"
            boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
            cursor="pointer"
            mx="3"
            position="relative"
            >
            <ZIcon name={icon} color="icon" />
            <Box w="5" h="5" backgroundColor="red" borderRadius="full" d="flex" alignItems="center" justifyContent="center" position="absolute" top="-1" right="-1">
              <Text fontSize="xs" color="white">{cart.length}</Text>
            </Box>
        </Circle> 
        <Drawer isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md">
          <DrawerOverlay/>
          <DrawerContent >
            <DrawerCloseButton _focus={{outline:'none'}}/>
            <DrawerHeader borderBottomWidth="1px">
                <Flex align="center" justify="center" py="10">  
                    <ZIcon name="cart" color="primary" size={40}/> 
                    <Text px="2" fontWeight="light">Carrito de compras</Text>
                </Flex>
            </DrawerHeader>
            <DrawerBody>
              {
                  cart.map( productCart => (
                      <ItemCart key={productCart.id} productCart={productCart}/>
                  ))
              }
              <Text textAlign="end" color="letter" py="4">Monto total a pagar: S/. 300</Text>
            </DrawerBody>
            <DrawerFooter>
                <Button type="submit" form="my-form" variant="primary" color="letter" isFullWidth onClick={handleBuy}>
                Efectuar compra
                </Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        {
          openBuyModal && (
            <BuyModal icon="bill" title="Efectuar compra" callbackFunction={handlePay}>
              <Box d="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Text pb="4">Ingrese su N° de tarjeta para finalizar</Text>
                <InputGroup d="flex" justifyContent="center">
                  <InputLeftAddon children="Nro." />
                  <Input type="text" placeholder="YYYY YYYY YYYY YYYY" w="70%"/>
                </InputGroup>
              </Box>
            </BuyModal>
          )
        }
      </>
    )
}
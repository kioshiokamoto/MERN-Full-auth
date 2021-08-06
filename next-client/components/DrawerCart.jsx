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
import {useContext, useEffect, useRef, useState} from 'react'
import { DataContext } from "../store/GlobalState"
import { post } from "../utils/http"
import BuyModal from "./BuyModal"
import ZIcon from './Icon'
import ItemCart from "./ItemCart"
import showToast from "./Toast"
export default function DrawerCart({icon}) {

  const [openBuyModal, setOpenBuyModal] = useState(false)
  const [total, setTotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { state, dispatch } = useContext(DataContext)
  const {auth, cart } = state
  const handleBuy = () =>{
    setOpenBuyModal(true)
  }

  const handlePay = async(result)=>{
    if(result === true){
      console.log('comprado')
      console.log('auth: ', auth)
      console.log('bus cart: ',{
        usuario: auth.user.id,
        products:cart
      })
      const cartBody = cart.map(item=>{
        return {
          producto: item._id,
          cantidad: item.cantidad,
          precio: item.precio
        }
      })
      // const res = await post('/shopping/buy',{
      //   usuario: auth.user.id,
      //   productos:cartBody
      // })

      const resp = await fetch(`http://localhost:5001/shopping/buy`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                      usuario: auth.user.id,
                      productos:cartBody
                    }),
                });
      const data = await resp.json()
      console.log('res shopppin: ',data)
      if(data.msg==='Se registra compras'){
        setOpenBuyModal(false)
        dispatch({type:'CLEAN_CART'})
        showToast("Exito en la compra","La compra se realizo con exito", "success")
      }
    }else if(result === false){
      setOpenBuyModal(false)
    }
  }

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.precio * item.cantidad;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);
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
        size="lg">
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
              <Text textAlign="end" color="letter" py="4">Monto total a pagar: S/. {total}</Text>
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
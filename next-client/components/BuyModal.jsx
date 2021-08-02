import React, { useRef } from "react"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Text
} from "@chakra-ui/react"

import ZIcon from "./Icon"


export default function BuyModal({
  title,
  children,
  accept = "Sí, acepto",
  cancel = "No, cancelar",
  callbackFunction,
  color = "primary",
  icon = "trash"
}) {
  const { onClose } = useDisclosure()
  const cancelRef = useRef(null)
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={true}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent py="4">
          <AlertDialogHeader
            d="flex"
            justifyContent="center"
            color={color}
            fontSize="2xl"
            flexDirection="column"
            alignItems="center"
          >
            <ZIcon name={icon} size={35} color={color} />
            <Text pt="4">{title}</Text>
          </AlertDialogHeader>
          <AlertDialogBody
            d="flex"
            justifyContent="center"
            
          >
           {children}
          </AlertDialogBody>

          <AlertDialogFooter d="flex" justifyContent="center">
            <Button
              variant="light"
              color="letter"
              ref={cancelRef}
              onClick={() => {
                callbackFunction(false)
              }}
            >
              {cancel}
            </Button>

            <Button
              variant={color}
              color="letter"
              ml={3}
              onClick={() => {
                callbackFunction(true)
              }}
            >
              {accept}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

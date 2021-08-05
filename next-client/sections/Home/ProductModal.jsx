/* istanbul ignore file */
/* eslint-disable camelcase */
import { useState, useEffect, useContext } from "react"
import ZIcon from "../../components/Icon"
import {
  Text,
  ModalHeader,
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Grid,
  Button,
  useDisclosure,
  Textarea,
  Box,
  NumberInput,
  NumberInputField,
  Circle
} from "@chakra-ui/react"

import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validProduct } from "./utils/valid"
import FileUpload from "../../components/FileUpload/FileUpload"
import showToast from "../../components/Toast"
import SelectField, { Option } from "../../components/SelectField"
import { regexOnlyString } from "../../utils/regex"

// import { imageUpload } from "../../utils/imageUpload"
import { patch, post, setAuth, setAuthMultiPart } from "../../utils/http"

import { DataContext } from "../../store/GlobalState"
import { toCapitalFirstLetter } from "../../utils/toCapital"

// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta

export default function ProductModal({
  variant,
  width,
  backgroundColor,
  showModalButtonText,
  icon = false,
  myproduct
}) {
  let initialState
  if (myproduct) {
    initialState = {
      values: {
        name: myproduct.nombre,
        brand: myproduct.marca,
        price: myproduct.precio.toString()
      },
      category: {
        value: myproduct.categoria.id,
        label: myproduct.categoria.nombre
      },
      imagesFiles: [
        myproduct.imagen,
      ]
    }
  } else {
    initialState = {
      values: {
        name: "",
        brand: "",
        price: ""
      },
      category: null,
      imagesFiles: [],
    }
  }
  const { state, dispatch } = useContext(DataContext)
  // @ts-ignore
  const { auth } = state
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [values, handleInputChange, reset] = useForm(initialState.values)
  const [category, setCategory] = useState(initialState.category)
  const [imagesFile, setImagesFile] = useState(initialState.imagesFiles)
  const { name, brand, price } = values
  const [errors, setErrors, resetErrors] = useError({
    name: "",
    brand: "",
    price: "",
    category: null,
    imagesFile: ""
  })

  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validProduct(
      values,
      category,
      imagesFile,
    )

    setErrors(errorsForm)
    if (isValid) {
      if (myproduct) {
        if (
          values.name === initialState.values.name &&
          values.brand === initialState.values.brand &&
          values.price === initialState.values.price &&
          category.value === initialState.category.value &&
          JSON.stringify(imagesFile) === JSON.stringify(initialState.imagesFiles)
        ) {
          return showToast(
            "Cuidado",
            "No hizo modificaciones en los campos",
            "info"
          )
        }
      }
      setIsPosting(true)
      // ---------------------------------------------------------
      // Uploading Images to Cloudinary
    //   let media = []
    //   const imgNewURL = imagesFile.filter(img => img.size)
    //   const imgOldURL = imagesFile.filter(img => !img.size)
    //   // parse imgOld: luego remover
    //   const imgOldUrlParse = imgOldURL.map(img => ({
    //     public_id: "publicId123",
    //     url: img
    //   }))
    //   if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)
    //   const imagesPost = [...imgOldUrlParse, ...media]
      // -------------------------------------------------------------
      const body = {
        imagen: "imagen1",
        nombre: values.name.toLocaleLowerCase(),
        categoria: category?.value,
        marca: values.brand.toLocaleLowerCase(),
        precio: Number(values.price),
      }
      console.log('body post patch: ', body)

      console.log('imagesFile[0]: ',imagesFile[0])
      let formData = new FormData();
			formData.append('file', imagesFile[0]);
      setAuth(auth.access_token)

      
      const url = await fetch(`http://localhost:5001/api/upload_post_image`,{
        headers: {
          'Authorization': auth.access_token,
          'Content-Type': 'multipart/form-data'
        },
        method: "POST",
        body: formData
      })
      console.log('url: ',url)
     
      // let res
    //   if (myproduct) {
    //     res = await patch(`/post/${myproduct.id}`, body)
    //   } else {
    //     res = await post("/post", body)
    //   }
      setIsPosting(false)
    //   if (res.data?.error) {
    //     return showToast(
    //       `Error al ${myproduct ? "editar" : "publicar"} el servicio`,
    //       res.data?.message[0],
    //       "error"
    //     )
    //   } else {
    //     showToast(
    //       `${myproduct ? "Edición" : "Creación"} exitosa`,
    //       `Se ${myproduct ? "editó" : "creó"} correctamente el anuncio`,
    //       "success"
    //     )
    //     setTimeout(() => {
    //       onClose()
    //     }, 1500)
    //     // TODO: hacer que la actualizacion de los post sea por disptach en auth
    //     if (mypost) {
    //       dispatch({ type: "EDIT_POST", payload: res.data.data })
    //     } else {
    //       dispatch({ type: "ADD_POST", payload: res.data.data })
    //     }
    //   }

      setTimeout(() => {
        onClose()
      }, 1500)

      // ---------------------------------------------------------
    }
  }

  function handleChangeSelect(option) {
    setCategory(option)
  }

  function handleDelete(index) {
    const images_file = imagesFile.filter((img, i) => i !== index)
    setImagesFile(images_file)
  }

  function handleDrop(files) {
    if (imagesFile.length >= 1) {
      showToast(
        "Error al cargar imagen",
        "Número de elementos maximo: 1",
        "error"
      )
      return
    }
    setImagesFile([...imagesFile, ...files])
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
      if (!post) {
        setImagesFile([])
        setCategory(null)
      
      } else {
        setImagesFile(initialState.imagesFiles)
        setCategory(initialState.category)
       
      }
      resetErrors()
    }
  }, [isOpen])

  return (
    <>
    {
      icon ? 
      <Circle
      w="45px"
      h="45px"
      backgroundColor="primary"
      boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
      cursor="pointer"
      onClick={onOpen}  
      >
        <ZIcon name="pencil" color="icon" size={20} />
      </Circle>
      : (
        <Button
        variant={variant}
        width={width}
        backgroundColor={backgroundColor}
        onClick={onOpen}
        >
          <Text>{showModalButtonText}</Text>
        </Button>
      )
      
    }


      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text align="center" color="primary" py="2" fontSize="xl">
              {myproduct ? "Editar producto" : "Nuevo producto"}
            </Text>
          </ModalHeader>

          <ModalBody color="primary" px="10">
            <form onSubmit={handleSubmit}>
              <Text color="primary" fontSize="lg" fontWeight="medium">
              </Text>
              <FormControl mb="2" id="first-name" isInvalid={!!errors.name}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Nombre del producto
                </FormLabel>

                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="Escribe nombre del servicio aquí"
                  name="name"
                  onChange={handleInputChange}
                  value={toCapitalFirstLetter(name)}
                />

                <FormErrorMessage fontSize="sm">{errors.name}</FormErrorMessage>
              </FormControl>

              <Grid templateColumns="repeat(2,1fr)" gap="6">
                <FormControl mb="2" isInvalid={!!errors.category}>
                  <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Categoría
                  </FormLabel>
                  <SelectField
                    fullWidth
                    required
                    // @ts-ignore
                    option={category}
                    placeholder="Seleccione una categoría "
                    onChange={handleChangeSelect}
                    errorHelper={!!errors.category}
                  >
                    {[{
                        label:'Casacas', 
                        value:1
                      },
                      {
                        label:'Chompas', 
                        value:2
                      },
                      {
                        label:'Polos', 
                        value:3
                      },
                      {
                        label:'Jeans', 
                        value:4
                      },
                      {
                        label:'Calzado',
                        value:5
                      },
                      {
                        label:'Accesorio', 
                        value:6
                      }].map((cat, idx) => (
                      <Option key={idx} value={cat.value}>
                        {cat.label}
                      </Option>
                    ))}
                  </SelectField>
                  <FormErrorMessage fontSize="sm">
                    {errors.category}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mb="2" isInvalid={!!errors.imagesFile}>
                  <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Archivos adjuntos
                  </FormLabel>
                  <FileUpload
                    fullWidth
                    files={imagesFile}
                    onDrop={handleDrop}
                    onDelete={handleDelete}
                    extensions={["jpg", "png"]}
                    remove
                    errorHelper={!!errors.imagesFile}
                  />
                  <FormErrorMessage fontSize="sm">
                    {errors.imagesFile}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mb="2" id="first-name" isInvalid={!!errors.brand}>
                    <FormLabel color="letter" fontWeight="light" fontSize="sm">
                     Marca
                    </FormLabel>

                    <Input
                    fontSize="sm"
                    type="text"
                    placeholder="Escribe nombre del servicio aquí"
                    name="brand"
                    onChange={handleInputChange}
                    value={toCapitalFirstLetter(brand)}
                    />

                    <FormErrorMessage fontSize="sm">{errors.brand}</FormErrorMessage>
                </FormControl>

                <FormControl mb="2" id="first-name" isInvalid={!!errors.price}>
                    <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Precio
                    </FormLabel>
                    <NumberInput min={0} defaultValue={price}>
                    <NumberInputField
                        fontSize="sm"
                        placeholder="S/."
                        name="price"
                        onChange={handleInputChange}
                        value={price}
                    />
                    </NumberInput>
                    <FormErrorMessage>{errors.price}</FormErrorMessage>
                </FormControl>
              </Grid>
              <Button
                fontSize="sm"
                width="full"
                variant="primary"
                type="submit"
                isLoading={isPosting}
                className="buttonDisabledPrimary"
                my="4"
                color="letter"
              >
                {myproduct ? "Guardar anuncio" : "Publicar anuncio"}
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

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
  NumberInputField
} from "@chakra-ui/react"

import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validProduct } from "./utils/valid"
import FileUpload from "../../components/FileUpload/FileUpload"
import showToast from "../../components/Toast"
import SelectField, { Option } from "../../components/SelectField"
import { regexOnlyString } from "../../utils/regex"

// import { imageUpload } from "../../utils/imageUpload"
import { patch, post, setAuth } from "../../utils/http"

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
        name: mypost.pst_nombre,
        brand: mypost.pst_marca,
        price: mypost.pst_precioBase.toString()
      },
      category: {
        value: mypost.pstCategoriaId.id,
        label: mypost.pstCategoriaId.cat_nombre
      },
      imagesFiles: [
        mypost.pst_imagen_1,
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
//   const { auth, categories } = state
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
          values.brief_content === initialState.values.brief_content &&
          values.description === initialState.values.description &&
          values.price === initialState.values.price &&
          category.value === initialState.category.value &&
          JSON.stringify(tags) === JSON.stringify(initialState.tags) &&
          JSON.stringify(imagesFile) ===
            JSON.stringify(initialState.imagesFiles)
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
    //   const body = {
    //     pst_imagen_1: imagesPost[0].url,
    //     pst_imagen_2: imagesPost[1].url,
    //     pst_imagen_3: imagesPost[2].url,
    //     pst_imagen_4: imagesPost[3].url,
    //     pst_imagen_5: imagesPost[4].url,
    //     pst_isActive: true,
    //     pst_descripcion: values.description.toLocaleLowerCase(),
    //     pst_descripcion_corta: values.brief_content.toLocaleLowerCase(),
    //     pst_nombre: values.name.toLocaleLowerCase(),
    //     pst_descripcion_incluye: tags,
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     pst_categoria: category?.value,
    //     pst_precioBase: Number(values.price)
    //   }
      // setAuth(auth!.access_token)
      // let res
    //   if (myproduct) {
    //     res = await patch(`/api/post/update/${mypost.id}`, body)
    //   } else {
    //     res = await post("/api/post/create", body)
    //   }
      setIsPosting(false)
    //   if (res.data?.error) {
    //     return showToast(
    //       `Error al ${mypost ? "editar" : "publicar"} el servicio`,
    //       res.data?.message[0],
    //       "error"
    //     )
    //   } else {
    //     showToast(
    //       `${mypost ? "Edición" : "Creación"} exitosa`,
    //       `Se ${mypost ? "editó" : "creó"} correctamente el anuncio`,
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
      <Button
        variant={variant}
        width={width}
        backgroundColor={backgroundColor}
        onClick={onOpen}
      >
        {icon ? (
          <ZIcon name="pencil" color="primary" size={20} />
        ) : (
          <Text>{showModalButtonText}</Text>
        )}
      </Button>

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
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    option={category}
                    placeholder="Seleccione una categoría "
                    onChange={handleChangeSelect}
                    errorHelper={!!errors.category}
                  >
                    {[{label:'Categoria 1', value:1},{label:'Categoría 2', value:2},{label:'Categoría 3', value:3}].map((cat, idx) => (
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

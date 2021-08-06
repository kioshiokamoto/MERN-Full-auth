/* istanbul ignore file */
/* eslint-disable camelcase */
import { useState, useEffect, useContext } from "react";
import ZIcon from "../../components/Icon";
//import axios from "axios";
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
    Circle,
} from "@chakra-ui/react";

import { useForm } from "../../utils/hooks/useForm";
import { useError } from "../../utils/hooks/useError";
import { validProduct } from "./utils/valid";
import FileUpload from "../../components/FileUpload/FileUpload";
import showToast from "../../components/Toast";
import SelectField, { Option } from "../../components/SelectField";
import { regexOnlyString } from "../../utils/regex";

// import { imageUpload } from "../../utils/imageUpload"
import { patch, post, setAuth } from "../../utils/http";

import { DataContext } from "../../store/GlobalState";
import { toCapitalFirstLetter } from "../../utils/toCapital";

// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta

export default function ProductModal({
    variant,
    width,
    backgroundColor,
    showModalButtonText,
    icon = false,
    myproduct,
}) {
    const categoriaId = (categoria)=>{
        switch (categoria) {
            case "Casacas":
                return 1
            case "Chompas":
                return 2;
            case "Polos":
                return 3;
            case "Jeans":
                return 4;
            case "Calzado":
                return 5;
            case "Accesorio":
                return 6;
        }
    }
    let idCategory 
    if(myproduct){
        idCategory = categoriaId(myproduct.categoria)
    }
    let initialState;
    if (myproduct) {
        initialState = {
            values: {
                name: myproduct.nombre,
                brand: myproduct.marca,
                price: myproduct.precio.toString(),
            },
            category: {
                value: idCategory,
                label: myproduct.categoria,
            },
            imagesFiles: [myproduct.image],
        };
    } else {
        initialState = {
            values: {
                name: "",
                brand: "",
                price: "",
            },
            category: null,
            imagesFiles: [],
        };
    }
    const { state, dispatch } = useContext(DataContext);
    // @ts-ignore
    const { auth } = state;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [values, handleInputChange, reset] = useForm(initialState.values);
    const [category, setCategory] = useState(initialState.category);
    const [imagesFile, setImagesFile] = useState(initialState.imagesFiles);
    const { name, brand, price } = values;
    const [errors, setErrors, resetErrors] = useError({
        name: "",
        brand: "",
        price: "",
        category: null,
        imagesFile: "",
    });

    const [isPosting, setIsPosting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors: errorsForm, isValid } = validProduct(
            values,
            category,
            imagesFile
        );

        setErrors(errorsForm);
        if (isValid) {
            if (myproduct) {
                if (
                    values.name === initialState.values.name &&
                    values.brand === initialState.values.brand &&
                    values.price === initialState.values.price &&
                    category.value === initialState.category.value &&
                    JSON.stringify(imagesFile) ===
                        JSON.stringify(initialState.imagesFiles)
                ) {
                    return showToast(
                        "Cuidado",
                        "No hizo modificaciones en los campos",
                        "info"
                    );
                }
            }
            setIsPosting(true);
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
            let url
            console.log('imagesFile: ',imagesFile)
            console.log('imagesFile.size: ', imagesFile[0].size)
            if(imagesFile[0].size){
                let formData = new FormData();
                formData.append("file", imagesFile[0]);
                const res = await fetch(
                    `http://localhost:5001/api/upload_post_image`,
                    {
                        headers: {
                            Authorization: auth.access_token,
                        },
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await res.json();
                url = data.url
            }else{
                url= imagesFile[0]
            }
            
            const body = {
                image: url,
                nombre: values.name.toLocaleLowerCase(),
                categoria: category?.label,
                marca: values.brand,
                precio: Number(values.price),
            };
            console.log("body post patch: ", body);
            setAuth(auth.access_token);
            let resp;
            if (myproduct) {
                //resp = await patch(`/post/${myproduct.id}`, body);
                resp = await fetch(`http://localhost:5001/post/${myproduct._id}`, {
                    headers: {
                        Authorization: auth.access_token,
                        "Content-Type": "application/json",
                    },
                    method: "PATCH",
                    body: JSON.stringify(body),
                });
                console.log("EDITANDO");
            } else {
                //resp = await post("/post", body);
                resp = await fetch(`http://localhost:5001/post`, {
                    headers: {
                        Authorization: auth.access_token,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(body),
                });
                console.log("postando");
               
                //console.log("resp post patch fecth: ", resp);
            }
            const data_product = await resp.json();
            console.log('data_product: ', data_product, 'asda, ', data_product.msg!=='Se actualizo post correctamente');
            setIsPosting(false);
              if (data_product.msg!=='Post creado correctamente' && data_product.msg!=='Se actualizo post correctamente') {
                return showToast(
                  `Error al ${myproduct ? "editar" : "publicar"} el servicio`,
                  'Error con el contenido del producto',
                  "error"
                )
              } else {
                showToast(
                  `${myproduct ? "Edición" : "Creación"} exitosa`,
                  `Se ${myproduct ? "editó" : "creó"} correctamente el anuncio`,
                  "success"
                )
                setTimeout(() => {
                  onClose()
                }, 1500)
                // TODO: hacer que la actualizacion de los post sea por disptach en auth
                if (myproduct) {
                  dispatch({ type: "EDIT_PRODUCT", payload: data_product.post })
                } else {
                  dispatch({ type: "ADD_PRODUCT", payload: data_product.post })
                }
              }

            setTimeout(() => {
                onClose();
            }, 1500);

            // ---------------------------------------------------------
        }
    };

    function handleChangeSelect(option) {
        setCategory(option);
    }

    function handleDelete(index) {
        const images_file = imagesFile.filter((img, i) => i !== index);
        setImagesFile(images_file);
    }

    function handleDrop(files) {
        if (imagesFile.length >= 1) {
            showToast(
                "Error al cargar imagen",
                "Número de elementos maximo: 1",
                "error"
            );
            return;
        }
        setImagesFile([...imagesFile, ...files]);
    }

    useEffect(() => {
        if (!isOpen) {
            reset();
            if (!post) {
                setImagesFile([]);
                setCategory(null);
            } else {
                setImagesFile(initialState.imagesFiles);
                setCategory(initialState.category);
            }
            resetErrors();
        }
    }, [isOpen]);

    return (
        <>
            {icon ? (
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
            ) : (
                <Button
                    variant={variant}
                    width={width}
                    backgroundColor={backgroundColor}
                    onClick={onOpen}
                >
                    <Text>{showModalButtonText}</Text>
                </Button>
            )}

            <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>
                        <Text
                            align="center"
                            color="primary"
                            py="2"
                            fontSize="xl"
                        >
                            {myproduct ? "Editar producto" : "Nuevo producto"}
                        </Text>
                    </ModalHeader>

                    <ModalBody color="primary" px="10">
                        <form onSubmit={handleSubmit}>
                            <Text
                                color="primary"
                                fontSize="lg"
                                fontWeight="medium"
                            ></Text>
                            <FormControl
                                mb="2"
                                id="first-name"
                                isInvalid={!!errors.name}
                            >
                                <FormLabel
                                    color="letter"
                                    fontWeight="light"
                                    fontSize="sm"
                                >
                                    Nombre del producto
                                </FormLabel>

                                <Input
                                    color="letter"
                                    fontSize="sm"
                                    type="text"
                                    placeholder="Escribe nombre del servicio aquí"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={toCapitalFirstLetter(name)}
                                />

                                <FormErrorMessage fontSize="sm">
                                    {errors.name}
                                </FormErrorMessage>
                            </FormControl>

                            <Grid templateColumns="repeat(2,1fr)" gap="6">
                                <FormControl
                                    mb="2"
                                    isInvalid={!!errors.category}
                                >
                                    <FormLabel
                                        color="letter"
                                        fontWeight="light"
                                        fontSize="sm"
                                    >
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
                                        {[
                                            {
                                                label: "Casacas",
                                                value: 1,
                                            },
                                            {
                                                label: "Chompas",
                                                value: 2,
                                            },
                                            {
                                                label: "Polos",
                                                value: 3,
                                            },
                                            {
                                                label: "Jeans",
                                                value: 4,
                                            },
                                            {
                                                label: "Calzado",
                                                value: 5,
                                            },
                                            {
                                                label: "Accesorio",
                                                value: 6,
                                            },
                                        ].map((cat, idx) => (
                                            <Option key={idx} value={cat.value}>
                                                {cat.label}
                                            </Option>
                                        ))}
                                    </SelectField>
                                    <FormErrorMessage fontSize="sm">
                                        {errors.category}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    mb="2"
                                    isInvalid={!!errors.imagesFile}
                                >
                                    <FormLabel
                                        color="letter"
                                        fontWeight="light"
                                        fontSize="sm"
                                    >
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
                                <FormControl
                                    mb="2"
                                    id="first-name"
                                    isInvalid={!!errors.brand}
                                >
                                    <FormLabel
                                        color="letter"
                                        fontWeight="light"
                                        fontSize="sm"
                                    >
                                        Marca
                                    </FormLabel>

                                    <Input
                                        color="letter"
                                        fontSize="sm"
                                        type="text"
                                        placeholder="Escribe nombre del servicio aquí"
                                        name="brand"
                                        onChange={handleInputChange}
                                        value={toCapitalFirstLetter(brand)}
                                    />

                                    <FormErrorMessage fontSize="sm">
                                        {errors.brand}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl
                                    mb="2"
                                    id="first-name"
                                    isInvalid={!!errors.price}
                                >
                                    <FormLabel
                                        color="letter"
                                        fontWeight="light"
                                        fontSize="sm"
                                    >
                                        Precio
                                    </FormLabel>
                                    <NumberInput min={0} defaultValue={price}>
                                        <NumberInputField
                                            color="letter"
                                            fontSize="sm"
                                            placeholder="S/."
                                            name="price"
                                            onChange={handleInputChange}
                                            value={price}
                                        />
                                    </NumberInput>
                                    <FormErrorMessage>
                                        {errors.price}
                                    </FormErrorMessage>
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
                                {myproduct
                                    ? "Guardar anuncio"
                                    : "Publicar anuncio"}
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

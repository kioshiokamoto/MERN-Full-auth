/* istanbul ignore file */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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
    FormHelperText,
    Checkbox,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "../../utils/hooks/useForm";
import { useError } from "../../utils/hooks/useError";
import { validRegister } from "./utils/valid";
import { post } from "../../utils/http";
import showToast from "../../components/Toast";

// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta
export default function Register({ variant, width, showModalButtonText }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();
    const [values, handleInputChange, reset] = useForm({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });
    const { name, lastName, email, password } = values;

    const [errors, setErrors, resetErrors] = useError({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [isPosting, setIsPosting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors: errorsForm, isValid } = validRegister(values);
        setErrors(errorsForm);
        if (isValid) {
            setIsPosting(true);
            // const resp = await post("/user/register", {
            //     email: values.email,
            //     name: `${values?.name} ${values?.lastName}`,
            //     password: values.password,
            // });
            const respRegister = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/register`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify( {
                        email: values.email,
                        name: `${values?.name} ${values?.lastName}`,
                        password: values.password,
                    }),
                }
            );
            
            const data = await respRegister.json();

            setIsPosting(false);

            // if (resp.data?.err) {
            //     showToast(
            //         "Error al registrarse",
            //         resp.data.response?.error,
            //         "error"
            //     );
            // } else {
            //     router.push("/active-message");
            // }
            if (data?.err) {
                showToast(
                    "Error al registrarse",
                    resp.data.response?.error,
                    "error"
                );
            } else {
                router.push("/active-message");
            }
        }
    };

    useEffect(() => {
        if (!isOpen) {
            reset();
            resetErrors();
        }
    }, [isOpen]);

    return (
        <>
            <Button variant={variant} w={width} onClick={onOpen} color="letter">
                {showModalButtonText}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text align="center" color="letter">
                            Registro
                        </Text>
                    </ModalHeader>

                    <ModalBody color="letter">
                        <form onSubmit={handleSubmit}>
                            <FormControl
                                mb="6"
                                id="first-name"
                                isInvalid={!!errors.name}
                            >
                                <FormLabel>Nombres</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="P. ej. Liliana Alexandra"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={name}
                                />
                                <FormErrorMessage>
                                    {errors.name}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl mb="6" isInvalid={!!errors.lastName}>
                                <FormLabel>Apellidos</FormLabel>

                                <Input
                                    type="text"
                                    placeholder="P. ej. Solar Rojas" // eslint-disable-next-line camelcase
                                    name="lastName"
                                    onChange={handleInputChange}
                                    value={lastName}
                                />
                                <FormErrorMessage>
                                    {errors.lastName}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl mb="6" isInvalid={!!errors.email}>
                                <FormLabel>Correo electrónico</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="P. ej. lilianasolar@gmail.com"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={email}
                                />
                                <FormErrorMessage>
                                    {errors.email}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl mb="6" isInvalid={!!errors.password}>
                                <FormLabel>Contraseña</FormLabel>

                                <Input
                                    type="password"
                                    placeholder="P. ej. lilso21"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={password}
                                />
                                <FormHelperText>
                                    Debe tener como minimo 7 caracteres
                                </FormHelperText>
                                <FormErrorMessage>
                                    {errors.password}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl mb="6">
                                <Checkbox
                                    colorScheme="purple"
                                    color="whiteAlpha.100"
                                >
                                    <Text fontSize="xs" color="letter">
                                        Acepto los
                                        <b>
                                            {" "}
                                            Términos, Condiciones y políticas de
                                            Contactec
                                        </b>
                                    </Text>
                                </Checkbox>
                            </FormControl>
                            <Button
                                width="full"
                                variant="primary"
                                my={2}
                                type="submit"
                                isLoading={isPosting}
                                className="buttonDisabledPrimary"
                                color="letter"
                            >
                                Registrate
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

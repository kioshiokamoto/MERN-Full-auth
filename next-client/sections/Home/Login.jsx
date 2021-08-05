/* istanbul ignore file */
import {
    Text,
    Modal,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    ModalContent,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "../../utils/hooks/useForm";
import { useError } from "../../utils/hooks/useError";
import { validLogin } from "./utils/valid";
import { post } from "../../utils/http";
import { DataContext } from "../../store/GlobalState";
import showToast from "../../components/Toast";

export default function Login({ variant, width, showModalButtonText }) {
    // eslint-disable-next-line no-unused-vars
    const { state, dispatch } = useContext(DataContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isPosting, setIsPosting] = useState(false);
    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: "",
    });
    const { email, password } = values;

    const [errors, setErrors, resetErrors] = useError({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors: errorsForm, isValid } = validLogin(values);
        setErrors(errorsForm);
        if (isValid) {
            const body = {
                us_correo: values.email,
                us_password: values.password,
            };
            // console.log("inicio sesion: ",body)
            setIsPosting(true);
            const res = await post("/user/login", {
                email: values.email,
                password: values.password,
            });
            console.log(res);
            setIsPosting(false);
            // console.log("res.data Login: ", res)
            // const error = false
            if (res.data.msg === "Error") {
                showToast("Error al iniciar sesión.", "res.data.msg ", "error");
            } else {
                // window.location.reload()
                dispatch({ type: "AUTH_TYPE", payload: "normal" });
                // @ts-ignore
                localStorage.setItem("isLogged", true);
                localStorage.setItem("typeLogged", "normal");
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
                            Inicio de sesión
                        </Text>
                    </ModalHeader>
                    <ModalBody color="letter">
                        <form onSubmit={handleSubmit}>
                            <FormControl mb="6" isInvalid={!!errors.email}>
                                <FormLabel>Correo electrónico</FormLabel>
                                <Input
                                    type="text"
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
                                <FormErrorMessage>
                                    {errors.password}
                                </FormErrorMessage>
                            </FormControl>
                            <Button
                                width="full"
                                variant="primary"
                                my={2}
                                type="submit"
                                className="buttonDisabledPrimary"
                                isLoading={isPosting}
                                color="letter"
                            >
                                Inicia sesión
                            </Button>
                            {/* <Text className="bold600" fontSize="lg" align="center" my="3">
                  <Link href="/restablecer-contrasena">
                    <a>¿Olvido su contraseña?</a>
                  </Link>
                </Text> */}
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

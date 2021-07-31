import { regexEmail, regexOnlyString } from "../../../utils/regex"
import { errorForm } from "../../../utils/types"
export const validRegister = values => {
  const errors = {
    name: "",
    lastName: "",
    email: "",
    password: ""
  }
  let isValid = true
  if (!values.name.trim()) {
    errors.name = errorForm.EMPTY_NAME
    isValid = false
  } else if (!regexOnlyString(values.name.trim())) {
    errors.name = errorForm.INVALID_NAME
    isValid = false
  }
  if (!values.lastName.trim()) {
    errors.lastName = errorForm.EMPTY_LASTNAME
    isValid = false
  } else if (!regexOnlyString(values.lastName.trim())) {
    errors.lastName = errorForm.INVALID_LASTNAME
    isValid = false
  }

  if (!values.email) {
    errors.email = errorForm.EMPTY_EMAIL
    isValid = false
  } else if (!regexEmail(values.email)) {
    errors.email = errorForm.INVALID_EMAIL
    isValid = false
  }

  if (!values.password) {
    errors.password = errorForm.EMPTY_PASSWORD
    isValid = false
  } else if (values.password.length < 7) {
    errors.password = errorForm.SHORT_PASSWORD
    isValid = false
  }

  return { errors, isValid }
}

export const validLogin = values => {
  const errors = {
    email: "",
    password: ""
  }
  let isValid = true
  if (!values.email) {
    errors.email = errorForm.EMPTY_EMAIL
    isValid = false
  } else if (!regexEmail(values.email)) {
    errors.email = errorForm.INVALID_EMAIL
    isValid = false
  }

  if (!values.password) {
    errors.password = errorForm.EMPTY_PASSWORD
    isValid = false
  } else if (values.password.length < 7) {
    errors.password = errorForm.SHORT_PASSWORD
    isValid = false
  }

  return { errors, isValid }
}

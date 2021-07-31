import React, { useState } from "react"

export const useForm = (
  initialState
)=> {
  const [values, setValues] = useState(initialState)

  const handleInputChange = e => {
    setValues({
      ...values,

      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setValues(initialState)
  }

  return [values, handleInputChange, reset]
}
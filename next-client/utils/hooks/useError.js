import React, { useState } from "react"

export const useError = (
  initialState = {}
) => {
  const [errors, setErrors] = useState(initialState)

  const resetErrors = () => {
    setErrors(initialState)
  }

  return [errors, setErrors, resetErrors]
}
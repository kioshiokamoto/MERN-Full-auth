/* istanbul ignore file */
import * as React from "react"

function Ring(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 29 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.625 26.292v1.541h27.75v-1.541l-3.083-3.084v-9.25c0-4.779-3.13-8.988-7.709-10.344v-.447a3.083 3.083 0 10-6.166 0v.447a10.776 10.776 0 00-7.709 10.344v9.25L.625 26.292zm10.792 3.083a3.083 3.083 0 106.166 0"
        fill={props.color}
      />
    </svg>
  )
}

export default Ring

/* istanbul ignore file */
import * as React from "react"

function LibraryBooks(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2zM0 4h2v14h14v2H2c-1.1 0-2-.9-2-2V4zm6 10V2h12v12H6zm10-7H8v2h8V7zm-8 3h4v2H8v-2zm8-6H8v2h8V4z"
        fill={props.color}
      />
    </svg>
  )
}

export default LibraryBooks

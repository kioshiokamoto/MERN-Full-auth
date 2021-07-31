/* istanbul ignore file */
import * as React from "react"

export default function Menu(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2V0h18v2H0zm0 5h18V5H0v2zm0 5h18v-2H0v2z"
        fill={props.color}
      />
    </svg>
  )
}

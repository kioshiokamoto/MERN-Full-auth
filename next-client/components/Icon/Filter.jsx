/* istanbul ignore file */
import * as React from "react"

function Filter(props) {
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
        d="M0 0v2h18V0H0zm7 12h4v-2H7v2zm8-5H3V5h12v2z"
        fill={props.color}
      />
    </svg>
  )
}

export default Filter

/* istanbul ignore file */
import * as React from "react"

export default function Dowload(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18.619H.667v-2.19H16v2.19zM.667 6.571h4.38V0h6.572v6.571H16l-7.667 7.667L.667 6.571z"
        fill={props.color}
      />
    </svg>
  )
}

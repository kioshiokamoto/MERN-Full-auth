/* istanbul ignore file */
import * as React from "react"

export default function Trash(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.917 0l.833.833h2.917V2.5H0V.833h2.917L3.75 0h4.167zM1 12.833c0 .917.75 1.667 1.667 1.667h6.666c.917 0 1.667-.75 1.667-1.667v-10H1v10zM2.667 4.5h6.666v8.333H2.667V4.5z"
        fill={props.color}
      />
    </svg>
  )
}

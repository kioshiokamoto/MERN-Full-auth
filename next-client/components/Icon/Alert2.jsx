/* istanbul ignore file */
import * as React from "react"

function Alert2(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17.333c4.6 0 8.334-3.733 8.334-8.333S13.6.667 9 .667A8.336 8.336 0 00.667 9c0 4.6 3.733 8.333 8.333 8.333zm.834-12.5V6.5H8.167V4.833h1.667zm0 8.334v-5H8.167v5h1.667z"
        fill={props.color}
      />
    </svg>
  )
}

export default Alert2

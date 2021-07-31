/* istanbul ignore file */
import * as React from "react"

export default function Calendar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2.333h.833c.917 0 1.667.75 1.667 1.667v11.667c0 .916-.75 1.666-1.667 1.666H2.167c-.925 0-1.667-.75-1.667-1.666L.508 4a1.66 1.66 0 011.659-1.667H3V.667h1.667v1.666h6.666V.667H13v1.666zM2.167 15.667h11.666V7.333H2.167v8.334zm11.666-10H2.167V4h11.666v1.667zm-1.666 4.166H8V14h4.167V9.833z"
        fill={props.color}
      />
    </svg>
  )
}

/* istanbul ignore file */
import * as React from "react"

export default function Print(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.833 4.667H14V.5H4v4.167h-.833a2.497 2.497 0 00-2.5 2.5v5H4V15.5h10v-3.333h3.333v-5c0-1.384-1.116-2.5-2.5-2.5zm-9.166-2.5h6.666v2.5H5.666v-2.5zm6.666 11.666V10.5H5.666v3.333h6.667zM14 10.5V8.833H4V10.5H2.333V7.167c0-.459.375-.834.833-.834h11.667c.458 0 .833.375.833.834V10.5H14zm-.834-2.917a.833.833 0 111.667 0 .833.833 0 01-1.667 0z"
        fill={props.color}
      />
    </svg>
  )
}

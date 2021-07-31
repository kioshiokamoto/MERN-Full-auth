/* istanbul ignore file */
import * as React from "react"

export default function Location(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5.25A4.372 4.372 0 00.125 4.625C.125 7.906 4.5 12.75 4.5 12.75s4.375-4.844 4.375-8.125A4.372 4.372 0 004.5.25zM1.375 4.624a3.126 3.126 0 016.25 0c0 1.8-1.8 4.494-3.125 6.175-1.3-1.668-3.125-4.393-3.125-6.175zm1.563 0a1.562 1.562 0 113.125 0 1.562 1.562 0 01-3.125 0z"
        fill={props.color}
      />
    </svg>
  )
}

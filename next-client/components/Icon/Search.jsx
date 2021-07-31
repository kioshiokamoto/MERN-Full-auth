/* istanbul ignore file */
import * as React from "react"

export default function Search(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.47 9.88h.66l4.157 4.166-1.241 1.241-4.167-4.158v-.658l-.225-.234a5.392 5.392 0 01-3.525 1.309 5.416 5.416 0 115.417-5.417 5.392 5.392 0 01-1.309 3.525l.234.225zM2.38 6.13a3.745 3.745 0 003.75 3.75 3.745 3.745 0 003.75-3.75 3.745 3.745 0 00-3.75-3.75 3.745 3.745 0 00-3.75 3.75z"
        fill={props.color}
        fillOpacity={0.54}
      />
    </svg>
  )
}

/* istanbul ignore file */
import * as React from "react"

export default function CircleClose(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.528.994A6.186 6.186 0 00.336 7.186a6.186 6.186 0 006.192 6.191 6.186 6.186 0 006.192-6.191A6.186 6.186 0 006.528.994zm3.096 8.414l-.873.873L6.528 8.06l-2.223 2.223-.873-.874 2.223-2.222-2.223-2.223.873-.873 2.223 2.223L8.75 4.09l.873.873L7.4 7.186l2.223 2.222z"
        fill={props.color}
      />
    </svg>
  )
}

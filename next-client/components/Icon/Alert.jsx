/* istanbul ignore file */
import * as React from "react"

export default function Alert(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.98 0C8.94 0 0 8.96 0 20s8.94 20 19.98 20C31.04 40 40 31.04 40 20S31.04 0 19.98 0zM22 22V10h-4v12h4zm0 8v-4h-4v4h4zM4 20c0 8.84 7.16 16 16 16s16-7.16 16-16S28.84 4 20 4 4 11.16 4 20z"
        fill={props.color}
      />
    </svg>
  )
}

/* istanbul ignore file */
import * as React from "react"

export default function Times(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 .333C7.783.333.333 7.783.333 17c0 9.217 7.45 16.667 16.667 16.667 9.216 0 16.666-7.45 16.666-16.667C33.666 7.783 26.216.333 17 .333zm0 30C9.65 30.333 3.666 24.35 3.666 17 3.666 9.65 9.65 3.667 17 3.667S30.333 9.65 30.333 17c0 7.35-5.983 13.333-13.333 13.333zm0-15.683l5.983-5.983 2.35 2.35L19.35 17l5.983 5.983-2.35 2.35L17 19.35l-5.984 5.983-2.35-2.35L14.65 17l-5.984-5.983 2.35-2.35L17 14.65z"
        fill={props.color}
      />
    </svg>
  )
}

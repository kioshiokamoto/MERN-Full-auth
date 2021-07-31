/* istanbul ignore file */
import * as React from "react"

export default function LockClose(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.625 5.313h.625c.687 0 1.25.562 1.25 1.25v6.25c0 .687-.563 1.25-1.25 1.25h-7.5c-.688 0-1.25-.563-1.25-1.25v-6.25c0-.688.562-1.25 1.25-1.25h.625v-1.25a3.126 3.126 0 016.25 0v1.25zM5.5 2.187a1.872 1.872 0 00-1.875 1.875v1.25h3.75v-1.25A1.872 1.872 0 005.5 2.187zm3.75 10.625h-7.5v-6.25h7.5v6.25zm-2.5-3.124c0 .687-.563 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.688.562-1.25 1.25-1.25.687 0 1.25.562 1.25 1.25z"
        fill={props.color}
      />
    </svg>
  )
}

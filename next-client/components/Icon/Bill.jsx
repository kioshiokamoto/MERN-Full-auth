import * as React from "react"

function Bill(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 38 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 5.25A3.5 3.5 0 015 1.75h28a3.5 3.5 0 013.5 3.5v17.5a3.5 3.5 0 01-3.5 3.5H5a3.5 3.5 0 01-3.5-3.5V5.25z"
        stroke="#F7CAA1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM1.5 8.75a7 7 0 007-7M29.5 26.25a7 7 0 017-7"
        stroke="#F7CAA1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bill
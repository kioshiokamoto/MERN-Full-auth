import * as React from "react"

function Check(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.257 12.785L2.18 7.708 0 9.888l7.257 7.257L22.222 2.18 20.042 0 7.257 12.785z"
        fill={props.color}
      />
    </svg>
  )
}

export default Check
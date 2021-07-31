/* istanbul ignore file */
import * as React from "react"

function Avatar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.5 35.2c5.104 0 9.616-2.613 12.25-6.533-.061-4.084-8.167-6.33-12.25-6.33s-12.189 2.246-12.25 6.33A14.766 14.766 0 0020.5 35.2zm0-28.992a6.125 6.125 0 100 12.25 6.125 6.125 0 000-12.25zm0-6.125A20.416 20.416 0 11.083 20.5C.083 9.21 9.271.083 20.5.083z"
        fill={props.color}
      />
    </svg>
  )
}

export default Avatar

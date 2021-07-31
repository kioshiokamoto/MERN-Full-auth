/* istanbul ignore file */
import * as React from "react"

export default function PowerOff(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.692.175h3.333V6.64L9.692 3.308V.175zM23.025 16.64v-6.466h-6.467L13.225 6.84h6.467V.175h3.333V6.84c1.833 0 3.333 1.5 3.333 3.334v9.133l-.333.334-3-3zM3.225 1.575l-2.35 2.35 5.483 5.483v9.934l5.834 5.833v5h8.333v-5l.8-.8 7.45 7.45 2.35-2.35-27.9-27.9zm13.967 25.267v-3.05l1.783-1.767-9.283-9.283v5.183l5.833 5.866v3.05h1.667z"
        fill={props.color}
      />
    </svg>
  )
}

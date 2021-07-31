/* istanbul ignore file */

import * as React from "react"

export default function Thermostate(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 .667c1.383 0 2.5 1.116 2.5 2.5v6.666a4.175 4.175 0 011.667 3.334c0 2.3-1.867 4.166-4.167 4.166a4.168 4.168 0 01-4.167-4.166c0-1.359.659-2.575 1.667-3.334V3.167c0-1.384 1.117-2.5 2.5-2.5zm0 1.666a.836.836 0 00-.833.834v5h1.666V6.5H5v-.833h.833V4H5v-.833h.833A.836.836 0 005 2.333z"
        fill={props.color}
      />
    </svg>
  )
}

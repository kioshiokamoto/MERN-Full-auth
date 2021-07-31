/* istanbul ignore file */
import * as React from "react"

export default function Loop(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.243.261v3.562a9.495 9.495 0 019.498 9.498 9.416 9.416 0 01-1.472 5.057l-1.734-1.733a6.97 6.97 0 00.831-3.324 7.129 7.129 0 00-7.123-7.124V9.76L5.494 5.01 10.243.261zM3.12 13.321a7.129 7.129 0 007.123 7.123v-3.562l4.749 4.75-4.749 4.748v-3.562a9.495 9.495 0 01-9.498-9.497c0-1.864.546-3.598 1.473-5.058L3.95 9.996a6.97 6.97 0 00-.831 3.325z"
        fill={props.color}
      />
    </svg>
  )
}

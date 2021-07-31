/* istanbul ignore file */
import * as React from "react"

export default function CheckCircle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 .667A8.336 8.336 0 00.667 9c0 4.6 3.733 8.334 8.333 8.334S17.333 13.6 17.333 9 13.6.667 9 .667zm0 15A6.676 6.676 0 012.333 9 6.676 6.676 0 019 2.334 6.675 6.675 0 0115.667 9 6.675 6.675 0 019 15.667zm-1.667-4.858l5.492-5.492L14 6.5l-6.667 6.667L4 9.834l1.175-1.175 2.158 2.15z"
        fill={props.color}
        fillOpacity={0.54}
      />
    </svg>
  )
}

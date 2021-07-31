/* istanbul ignore file */
import * as React from "react"

function Energy(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98 0C4.47 0 0 4.47 0 9.98c0 5.51 4.47 9.98 9.98 9.98 5.51 0 9.98-4.47 9.98-9.98C19.96 4.47 15.49 0 9.98 0zm0 17.96C5.58 17.96 2 14.38 2 9.98S5.58 2 9.98 2s7.98 3.58 7.98 7.98-3.58 7.98-7.98 7.98zm.75-14.98l-4.5 8.5h3.14v5.5l4.36-8.5h-3v-5.5z"
        fill={props.color}
      />
    </svg>
  )
}

export default Energy

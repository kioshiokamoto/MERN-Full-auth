/* istanbul ignore file */
import * as React from "react"

export default function Transfer(props) {
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
        d="M6.917 3.375c.916 0 1.666-.75 1.666-1.666 0-.917-.75-1.667-1.667-1.667C6 .042 5.25.792 5.25 1.709c0 .916.75 1.666 1.667 1.666zm5.825 6.875v1.459h4.591v1.25h-4.591v1.458l-2.076-2.083 2.075-2.084zm-2.076 5h4.592v-1.458l2.075 2.083-2.075 2.084V16.5h-4.591v-1.25zM1.5 17.96l2.292-11.75-1.459.625v2.791H.667V5.71l4.375-1.792c.208-.083.416-.125.625-.125.583 0 1.125.292 1.416.792l.792 1.333c.75 1.208 2.083 2.042 3.625 2.042v1.666A5.815 5.815 0 016.958 7.46l-.5 2.5 1.708 1.708v6.292H6.5v-5l-1.792-1.667-1.458 6.667H1.5z"
        fill={props.color}
      />
    </svg>
  )
}

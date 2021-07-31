/* istanbul ignore file */
import * as React from "react"

function Facebook(props) {
  return (
    <svg
      width="1.3em"
      height="1.3em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0H2a2 2 0 00-2 2v16a2 2 0 002 2h8v-7.53H7V9.648h3V8.131C10 5.26 11.49 4 13.925 4c1.143 0 1.759.081 2.057.121l.018.002v2.7h-1.661C13.305 6.824 13 7.359 13 8.44v1.207h2.974l-.411 2.824H13V20h5a2 2 0 002-2V2a2 2 0 00-2-2z"
        fill={props.color}
      />
    </svg>
  )
}

export default Facebook

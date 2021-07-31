/* istanbul ignore file */
import * as React from "react"

function AssignmentReturned(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.82 2H16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-.14 0-.27-.01-.4-.03a2.008 2.008 0 01-1.44-1.19C.06 18.54 0 18.27 0 18V4c0-.28.06-.54.16-.77A2.008 2.008 0 011.6 2.04c.13-.03.26-.04.4-.04h4.18C6.6.84 7.7 0 9 0c1.3 0 2.4.84 2.82 2zM11 11h3l-5 5-5-5h3V7h4v4zM9 1.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM2 18h14V4H2v14z"
        fill={props.color}
      />
    </svg>
  )
}

export default AssignmentReturned

/* istanbul ignore file */

import * as React from "react"

export default function Label(props) {
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
        d="M16.841 8.65l-7.5-7.5c-.3-.3-.716-.483-1.175-.483H2.333c-.917 0-1.666.75-1.666 1.666v5.834c0 .458.183.875.491 1.183l7.5 7.5c.3.3.717.483 1.175.483a1.63 1.63 0 001.175-.491l5.834-5.834c.308-.3.491-.716.491-1.175 0-.458-.191-.883-.491-1.183zm-7.008 7.025l-7.5-7.508V2.333h5.833v-.008l7.5 7.5-5.833 5.85zM3.166 4.417a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        fill={props.color}
      />
    </svg>
  )
}

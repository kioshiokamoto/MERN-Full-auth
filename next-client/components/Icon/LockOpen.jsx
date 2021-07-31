/* istanbul ignore file */
import * as React from "react"

export default function LockOpen(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12.167h-1.667V8.833C22.333 4.233 18.6.5 14 .5a8.336 8.336 0 00-8.333 8.333H9c0-2.766 2.233-5 5-5s5 2.234 5 5v3.334H4A3.343 3.343 0 00.667 15.5v16.667C.667 34 2.167 35.5 4 35.5h20c1.833 0 3.333-1.5 3.333-3.333V15.5c0-1.833-1.5-3.333-3.333-3.333zm-20 20V15.5h20v16.667H4zm13.333-8.334c0 1.834-1.5 3.334-3.333 3.334a3.343 3.343 0 01-3.333-3.334c0-1.833 1.5-3.333 3.333-3.333 1.833 0 3.333 1.5 3.333 3.333z"
        fill={props.color}
      />
    </svg>
  )
}

/* istanbul ignore file */
import * as React from "react"

function Instagram(props) {
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
        d="M6 0h8a6 6 0 016 6v8a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6zm10 3c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm-1 7c0-2.758-2.242-5-5-5s-5 2.242-5 5 2.242 5 5 5 5-2.242 5-5zm-5-3a3 3 0 100 6 3 3 0 000-6z"
        fill={props.color}
      />
    </svg>
  )
}

export default Instagram

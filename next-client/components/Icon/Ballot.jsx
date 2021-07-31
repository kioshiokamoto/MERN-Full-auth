/* istanbul ignore file */

import * as React from "react"

export default function Ballot(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.833.5H2.167C1.25.5.5 1.25.5 2.167v11.666c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V2.167C15.5 1.25 14.75.5 13.833.5zM13 4.25H8.833v1.667H13V4.25zm0 5.833H8.833v1.667H13v-1.667zm-10.833 3.75h11.666V2.167H2.167v11.666zM7.167 3H3v4.167h4.167V3zM3.833 6.333h2.5v-2.5h-2.5v2.5zm3.334 2.5H3V13h4.167V8.833zm-3.334 3.334h2.5v-2.5h-2.5v2.5z"
        fill={props.color}
      />
    </svg>
  )
}

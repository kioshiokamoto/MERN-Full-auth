/* istanbul ignore file */

import * as React from "react"

export default function Unarchive(props) {
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
        d="M13.958.958l1.159 1.4c.241.284.383.659.383 1.059v10.416c0 .917-.75 1.667-1.667 1.667H2.167C1.25 15.5.5 14.75.5 13.833V3.417c0-.4.142-.775.383-1.059l1.15-1.4C2.267.675 2.608.5 3 .5h10c.392 0 .733.175.958.458zM12.8 2.167H3.2L2.517 3h10.975l-.692-.833zM2.167 13.833V4.667h11.666v9.166H2.167zm4.625-4.166H4.667L8 6.333l3.333 3.334H9.208v2.5H6.792v-2.5z"
        fill={props.color}
      />
    </svg>
  )
}

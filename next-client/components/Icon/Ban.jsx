/* istanbul ignore file */
import * as React from "react"

export default function Ban(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.999.333C7.799.333.332 7.8.332 17c0 9.2 7.467 16.666 16.667 16.666 9.2 0 16.666-7.466 16.666-16.666S26.2.333 17 .333zM3.666 17c0-7.367 5.966-13.334 13.333-13.334a13.17 13.17 0 018.167 2.817L6.482 25.166A13.17 13.17 0 013.666 17zm5.166 10.516a13.17 13.17 0 008.166 2.817c7.367 0 13.334-5.967 13.334-13.333a13.17 13.17 0 00-2.817-8.167L8.832 27.516z"
        fill={props.color}
      />
    </svg>
  )
}

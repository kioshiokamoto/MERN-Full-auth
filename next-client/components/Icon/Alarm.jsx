/* istanbul ignore file */
import * as React from "react"

export default function Alarm(props) {
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
        d="M33.667 6.667l-7.666-6.5-2.167 2.5 7.667 6.5 2.166-2.5zm-23.5-3.834L8.001.333.334 6.667l2.167 2.5 7.666-6.334zm5.167 7.667h2.5v8.833l6.667 4-1.334 2-7.833-4.833v-10zm1.667-6.667c-8.334 0-15 6.667-15 15 0 8.334 6.666 15 15 15 8.333 0 15-6.666 15-15 0-8.333-6.667-15-15-15zm-11.667 15c0 6.5 5.167 11.667 11.667 11.667s11.666-5.167 11.666-11.667S23.501 7.166 17.001 7.166 5.334 12.333 5.334 18.833z"
        fill={props.color}
      />
    </svg>
  )
}

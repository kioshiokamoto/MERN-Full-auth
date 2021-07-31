/* istanbul ignore file */
import * as React from "react"

export default function Save(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.855.811h19.963l6.655 6.648v19.945a3.335 3.335 0 01-3.327 3.324H3.856a3.325 3.325 0 01-3.328-3.324V4.135A3.325 3.325 0 013.855.811zm0 26.593h23.29V8.839l-4.707-4.704H3.855v23.269zM15.501 15.77a4.982 4.982 0 00-4.991 4.986 4.982 4.982 0 004.99 4.986 4.982 4.982 0 004.991-4.986 4.982 4.982 0 00-4.99-4.986zm4.99-9.973H5.52v6.648h14.972V5.797z"
        fill={props.color}
      />
    </svg>
  )
}

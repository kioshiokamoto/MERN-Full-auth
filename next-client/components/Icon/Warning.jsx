/* istanbul ignore file */
import * as React from "react"

export default function Warning(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.158 23.929L13.5.882 26.843 23.93H.158zm22.476-2.426l-9.133-15.78-9.134 15.78h18.267zm-7.92-3.64h-2.426v2.427h2.426v-2.426zm-2.426-7.277h2.426v4.852h-2.426v-4.852z"
        fill={props.color}
      />
    </svg>
  )
}

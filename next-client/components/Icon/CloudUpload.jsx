/* istanbul ignore file */
import * as React from "react"

export default function CloudUpload(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.188 12.55C23.337 8.237 19.55 5 15 5a9.37 9.37 0 00-8.313 5.05A7.493 7.493 0 000 17.5C0 21.637 3.362 25 7.5 25h16.25C27.2 25 30 22.2 30 18.75c0-3.3-2.563-5.975-5.813-6.2zm-6.688 3.7v5h-5v-5H8.75L15 10l6.25 6.25H17.5z"
        fill={props.color}
      />
    </svg>
  )
}

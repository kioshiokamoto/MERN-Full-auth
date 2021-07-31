/* istanbul ignore file */
import * as React from "react"

function HelpOutline(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.469 7.177a5.71 5.71 0 015.709-5.709 5.71 5.71 0 015.708 5.709 5.71 5.71 0 01-5.708 5.709 5.71 5.71 0 01-5.709-5.709zm6.28 3.425H6.606V9.461h1.141v1.141zm-.571 1.142A4.573 4.573 0 012.61 7.177 4.573 4.573 0 017.178 2.61a4.573 4.573 0 014.567 4.567 4.573 4.573 0 01-4.567 4.567zM4.894 6.035a2.283 2.283 0 114.567 0c0 .733-.45 1.127-.89 1.51-.417.365-.822.72-.822 1.345H6.607c0-1.04.538-1.452 1.01-1.815.371-.284.702-.538.702-1.04 0-.628-.513-1.141-1.141-1.141s-1.142.513-1.142 1.141H4.894z"
        fill={props.color}
      />
    </svg>
  )
}

export default HelpOutline

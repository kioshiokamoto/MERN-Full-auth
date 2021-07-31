import * as React from "react"

function Cart(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.606 17.411h.338L3.474 2.124H.817v-2h4.353l.856 5.318H22.12l-1.33 9.306H7.525l.434 2.658h10.805a1.994 1.994 0 11-1.994 1.968H7.463v.027a1.994 1.994 0 11-1.857-1.99zm.74-9.973l.86 5.313h11.916l.765-5.313H6.347z"
        fill={props.color}
      />
    </svg>
  )
}

export default Cart
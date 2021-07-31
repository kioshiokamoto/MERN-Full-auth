/* istanbul ignore file */
import * as React from "react"

export default function Pencil(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.053.875a.695.695 0 00-.486.201l-1.27 1.271L11.9 4.951l1.27-1.27a.692.692 0 000-.98l-1.625-1.625a.682.682 0 00-.493-.201zm-2.499 4.18l.639.64-6.29 6.291h-.64v-.639l6.291-6.291zM.874 10.77l7.68-7.68 2.604 2.604-7.68 7.68H.874V10.77z"
        fill={props.color}
      />
    </svg>
  )
}

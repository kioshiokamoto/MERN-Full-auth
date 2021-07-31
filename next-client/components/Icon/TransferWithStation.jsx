/* istanbul ignore file */
import * as React from "react"

function TransferWithStation(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.07 3.375c.917 0 1.667-.75 1.667-1.667 0-.916-.75-1.666-1.666-1.666-.917 0-1.667.75-1.667 1.666 0 .917.75 1.667 1.667 1.667zm5.826 6.875v1.458h4.591v1.25h-4.591v1.458l-2.075-2.083 2.075-2.083zm-2.075 5h4.591V13.79l2.075 2.084-2.074 2.083V16.5H10.82v-1.25zm-9.167 2.708l2.292-11.75-1.459.625v2.792H.821V5.708l4.375-1.792c.208-.083.416-.124.625-.124.583 0 1.125.291 1.416.791l.792 1.333c.75 1.209 2.084 2.042 3.625 2.042v1.667a5.815 5.815 0 01-4.542-2.167l-.5 2.5 1.709 1.708v6.292H6.654v-5l-1.792-1.667-1.458 6.667h-1.75z"
        fill={props.color}
      />
    </svg>
  )
}

export default TransferWithStation

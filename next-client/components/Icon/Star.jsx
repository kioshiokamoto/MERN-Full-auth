/* istanbul ignore file */
import * as React from "react"

function Star(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 8.695l4.547-.702L9.998 3.8l1.952 4.193 4.55.702-3.3 3.418.755 4.687-3.957-2.197L6.043 16.8l.754-4.687L3.5 8.695z"
        fill={props.color}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 15.925L4.438 19 5.5 12.488 1 7.875l6.219-.95L10 1l2.781 5.925 6.219.95-4.5 4.613L15.562 19 10 15.925zM4.12 8.92l2.984 3.063-.683 4.199L10 14.214l3.58 1.968-.683-4.2 2.985-3.062-4.116-.63L10 4.534 8.234 8.29l-4.113.63z"
        fill="#FBD76D"
      />
    </svg>
  )
}

export default Star

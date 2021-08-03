import * as React from "react"

function Logo(props) {
  return (
    <svg
      width="2.5em"
      height="2.5em"
      viewBox="0 0 46 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.316 3.065C33.736 1.631 32.392.697 30.904.697H6.593v7.749h15.543L0 32.249h10.332L33.558 7.274c1.038-1.116 1.336-2.774.758-4.209zM45.343 7.865H35.011L11.785 32.841c-1.038 1.114-1.336 2.774-.757 4.208.578 1.435 1.922 2.367 3.41 2.367H38.75v-7.748H23.208L45.343 7.865z"
        fill={props.color}
      />
    </svg>
  )
}

export default Logo

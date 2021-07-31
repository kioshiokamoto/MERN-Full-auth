/* istanbul ignore file */
import * as React from "react"

export default function Assignment(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.35 2.334h3.483c.917 0 1.667.75 1.667 1.666v11.667c0 .917-.75 1.667-1.667 1.667H2.167c-.117 0-.225-.009-.334-.025a1.674 1.674 0 01-1.2-.992 1.71 1.71 0 01-.133-.65V4c0-.233.05-.45.133-.641a1.673 1.673 0 011.2-.992 1.46 1.46 0 01.334-.033H5.65A2.509 2.509 0 018 .667c1.083 0 2 .7 2.35 1.667zM3.833 5.667h8.334v1.667H3.833V5.667zM12.167 9H3.833v1.667h8.334V9zm-2.5 3.334H3.833V14h5.834v-1.666zM8 2.125a.63.63 0 01.625.625.63.63 0 01-.625.625.63.63 0 01-.625-.625A.63.63 0 018 2.125zM2.167 15.667h11.666V4H2.167v11.667z"
        fill={props.color}
      />
    </svg>
  )
}

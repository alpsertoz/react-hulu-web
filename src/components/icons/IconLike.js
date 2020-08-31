import * as React from "react"

function SvgLike(props) {
  return (
    <svg width={16} height={16} viewBox="0 0 48 48" {...props}>
      <path
        fill="#F44336"
        d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9 7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
      />
    </svg>
  )
}

export default SvgLike

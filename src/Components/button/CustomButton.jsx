import React from "react"

const CustomButton = ({ className = "", text = "", ...rest }) => {
  return (
    <button className={className} {...rest}>
      {text}
    </button>
  )
}

export default CustomButton

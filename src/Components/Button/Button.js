import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.clickFunction}>
      {props.name}
    </button>
  )
}

export default Button

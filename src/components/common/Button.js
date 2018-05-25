import React from 'react'
import { buttonStyle } from './styles/Button.css'

const Button = (props) => {
  return (
    <button className={buttonStyle}>{props.children}</button>
  )
}
export { Button }

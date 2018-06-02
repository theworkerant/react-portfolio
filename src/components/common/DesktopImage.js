import React from 'react'
import { imageStyle } from './styles/DesktopImage.css'

const DesktopImage = (props) => {
  return <img className={imageStyle} src={props.imageSource} />
}

export { DesktopImage }

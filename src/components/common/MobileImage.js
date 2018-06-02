import React from 'react'
import { imageStyle } from './styles/MobileImage.css'

const MobileImage = (props) => {
  return <img className={imageStyle} src={props.imageSource} />
}

export { MobileImage }

import React from 'react'
import { imageStyle } from './styles/Image.css'

const Image = (props) => {
  return <img className={imageStyle} src={props.imageSource} />
}

export { Image }

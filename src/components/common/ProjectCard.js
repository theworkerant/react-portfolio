import React from 'react'
import {
  imageStyle
} from './styles/ProjectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <Link to={props.linkPath}>
      <img className={imageStyle} src={props.imageSource} />
    </Link>
  )
}

export { ProjectCard }

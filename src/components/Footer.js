import React, { Component } from 'react'
import {
  container,
  copyContainer,
  projectLink,
  image
} from './styles/Footer.css'
import { Link } from 'react-router-dom'

import git from '../assets/git.png'

class Footer extends Component {
  render() {
    return (
      <div className={container}>
        <div className={copyContainer}>
          <Link to="/" className={projectLink}>HOME</Link>
          {/* <Link to="/contact" className={projectLink}>CONTACT</Link>
          <a href="https://github.com/nigelflippo">
            <img className={image} src={git} />
          </a> */}
        </div>
      </div>
    )
  }
}

export default Footer

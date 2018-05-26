import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  navContainer,
  linkStyle,
  titleStyle,
  links,
  image
} from './styles/Nav.css'
import png from '../assets/git.png'

class Nav extends Component {
  render() {
    return (
      <div className={navContainer}>
        <Link to="/" className={titleStyle}>
          NIGEL FLIPPO
        </Link>
        <ul className={links}>
          <li>
            <Link to="/contact" className={linkStyle}>CONTACT</Link>
          </li>
          <li>
            <a href="https://github.com/nigelflippo">
              <img className={image} src={png} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  navContainer,
  linkStyle,
  titleStyle,
  links,
  image
} from './styles/Nav.css'

class Nav extends Component {
  render() {
    return (
      <div className={navContainer}>
        <Link to="/" className={titleStyle}>
          [/\.ask/]
        </Link>
        <ul className={links}>
          <li>
            <Link to="/contact" className={linkStyle}>POST</Link>
          </li>
          <li>
            <a href="https://github.com/nigelflippo">
              <img className={image} src="../../assets/git.png" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav

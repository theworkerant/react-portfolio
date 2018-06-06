import React, { Component } from 'react'
import {
  container,
  item,
  header
} from './styles/Footer.css'
import { Link } from 'react-router-dom'

import git from '../assets/git.png'

class Footer extends Component {
  render() {
    return (
      <div className={container}>
        <span className={header}>Full-Stack Portfolio</span>
        <span className={item}>built using:</span>
        <span className={item}>React | Redux | Webpack | NodeJS | Express</span>
        <br/>
        {/* <span className={item}>2000 Walnut St, Apt 103<br/>Boulder CO, 80302</span> */}
        <span className={item}>flippo.nigel@gmail.com</span>
      </div>
    )
  }
}

export default Footer

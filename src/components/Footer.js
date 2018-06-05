import React, { Component } from 'react'
import {
  container,
  item
} from './styles/Footer.css'
import { Link } from 'react-router-dom'

import git from '../assets/git.png'

class Footer extends Component {
  render() {
    return (
      <div className={container}>
        <span className={item}>flippo.nigel@gmail.com</span>
        {/* <span className={item}>2000 Walnut St, Apt 103<br/>Boulder CO, 80302</span> */}
      </div>
    )
  }
}

export default Footer

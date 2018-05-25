import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  container,
  innerContainer
} from './index.css'

import HomeContainer from './containers/HomeContainer'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className={container}>
          <div className={innerContainer}>
            <Nav />
            <HomeContainer />
          </div>
        </div>
      </Router>
    )
  }
}

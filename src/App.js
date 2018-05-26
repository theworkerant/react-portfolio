import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  container,
  innerContainer
} from './index.css'

import Home from './components/Home'
import Nav from './components/Nav'
import RitmoContainer from './containers/RitmoContainer'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className={container}>
          <Nav />
          <Route exact path="/" render={() => (
            <div className={innerContainer}>
              <Home />
            </div>
          )} />
          <Route exact path="/ritmo" render={() => (
            <div className={innerContainer}>
              <RitmoContainer />
            </div>
          )} />
        </div>
      </Router>
    )
  }
}

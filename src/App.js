import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  container,
  innerContainer
} from './index.css'

import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import RitmoContainer from './containers/RitmoContainer'
import ContactContainer from './containers/ContactContainer'
import PhaserContainer from './containers/PhaserContainer'

import Contact from './components/Contact'

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
              {/* <Footer linkName="HOME"/> */}
            </div>
          )} />
          <Route exact path="/phaser" render={() => (
            <div className={innerContainer}>
              <PhaserContainer />
              {/* <Footer linkName="HOME"/> */}
            </div>
          )} />
          <Route exact path="/contact" render={() => (
            <div className={innerContainer}>
              <Contact />
            </div>
          )} />
          <Footer />
        </div>
      </Router>
    )
  }
}

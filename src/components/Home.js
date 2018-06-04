import React, { Component } from 'react'

import { ProjectCard } from './common'
import ritmo from '../assets/ritmo-mockup.jpg'
import shmup from '../assets/shmup.jpg'

import {
  homeContainer,
  aboutContainer,
  projectsContainer,
  aboutMe
} from './styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div className={homeContainer}>
        <div className={aboutContainer}>
          <div className={aboutMe}>
            Junior Full-Stack Developer. Strong background in React and React Native development. Looking for the opportunity to contribute to an awesome software development team.
          </div>
        </div>
        <div className={projectsContainer}>
          <ProjectCard
            linkPath="/ritmo"
            imageSource={ritmo}
          />
          <ProjectCard
            linkPath="/phaser"
            imageSource={shmup}
          />
          
        </div>
      </div>
    )
  }
}

export default Home

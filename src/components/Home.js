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
            Junior Full-Stack Developer. <br/>Highly experienced working with React, Express, and NodeJS.<br/> Looking for the opportunity to learn and collaborate with a hardworking software team.
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

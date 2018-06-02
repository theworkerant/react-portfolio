import React, { Component } from 'react'
import Form from './Form'
import {
  Comment,
  MobileImage
} from './common'

import {
  container,
  innerContainer,
  formContainer,
  commentsContainer,
  text,
  header,
  subHeader,
  commentHeader,
  flexRow,
  flexText,
  smallImage
} from './styles/Ritmo.css'

import splash from '../assets/ritmo/splash.png'
import signup from '../assets/ritmo/sign-up.png'
import signup2 from '../assets/ritmo/electric-guitar-sign-up.png'
import example from '../assets/ritmo/example-instructor.png'
import lessonPost from '../assets/ritmo/lesson-post.png'
import myLessons from '../assets/ritmo/my-lessons.png'
import jennyProfile from '../assets/ritmo/jenny-profile.png'
import nigel from '../assets/ritmo/nigel-profile.png'
import instructors from '../assets/ritmo/instructors.png'
import nigelLessons from '../assets/ritmo/nigel-lessons.png'
import instructorSchedule from '../assets/ritmo/instructor-schedule.png'

class Ritmo extends Component {
  componentDidMount = () => {
    this.props.getComments()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.comments.comments.length
      !== this.props.comments.comments.length) {
      this.props.getComments()
    }
  }

  renderComments = () => {
    return (
      this.props.comments.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            company={comment.company}
            comment={comment.comment}
            date={comment.created_at}
          />
        )
      })
    )
  }

  render() {
    return (
      <div className={container}>
        <div className={innerContainer}>

          <h1 className={header}>RITMO</h1>
          <p className={text}>
            Ritmo is an iOS app I developed to allow music instructors to connect with prospective students and schedule lesson times.
          </p>

          <div className={flexRow}>
            <MobileImage imageSource={splash} />
            <div className={flexText}>
              <h1 className={subHeader}>PROJECT DETAILS</h1>
              <p className={text}>Ritmo was built using React Native, Flask, and PostgreSQL. I designed and coded the application over the course of a two week project sprint.</p>
            </div>
          </div>

          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>INSPIRATION</h1>
              <p className={text}>As a former performance classical musician and instructor, I felt that the music world was in need of a less antiquated way to schedule lesson times. Ritmo takes a modular approach to lessons, allowing students to pick and choose from multiple instructors and skill levels.</p>
            </div>
            <MobileImage imageSource={instructorSchedule} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>SIGN UP PROCESS</h1>
            <p className={text}>
              The first step in using Ritmo is to register as either a student or instructor. Each user may select their instrument of choice and estimable skill level. This can be edited in settings, should the student wish to pursue a new instrument.
            </p>
          </div>
          <div className={flexRow}>
            <img className={smallImage} src={signup} />
            <img className={smallImage} src={signup2} />
            <img className={smallImage} src={example} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>POSTING A LESSON</h1>
            <p className={text}>
              Instructors may post lessons that will become available to students. Lessons are listed by name, date, and skill level.
            </p>
          </div>
          <div className={flexRow}>
            <img className={smallImage} src={lessonPost} />
            <img className={smallImage} src={myLessons} />
          </div>


          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>STUDENT PROFILE</h1>
              <p className={text}>The student's profile page lists the lessons that they are registered for.</p>
            </div>
            <MobileImage imageSource={jennyProfile} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>INSTRUCTOR SELECTION</h1>
            <p className={text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={flexRow}>
            <img className={smallImage} src={instructors} />
            <img className={smallImage} src={nigel} />
          </div>

          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>INSTRUCTOR PROFILE</h1>
              <p className={text}>The student's profile page lists the lessons that they are registered for.</p>
            </div>
            <MobileImage imageSource={nigelLessons} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>WHATS NEXT</h1>
            <p className={text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <span className={commentHeader}>LEAVE A COMMENT</span>
          <Form />
          <div className={commentsContainer}>
            <ul>
              {this.renderComments()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Ritmo

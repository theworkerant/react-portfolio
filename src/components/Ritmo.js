import React, { Component } from 'react'
import CommentForm from './CommentForm'
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
      this.props.comments.comments
        .filter(a => a.project_id === 1)
        .map((comment) => {
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
              Instructors may post lessons that will become available to students. Lessons are listed by name, date, and skill level. Lessons may also be canceled or rescinded at any time.
            </p>
          </div>
          <div className={flexRow}>
            <img className={smallImage} src={lessonPost} />
            <img className={smallImage} src={myLessons} />
          </div>


          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>STUDENT PROFILE</h1>
              <p className={text}>The student's profile page lists the lessons that they are registered for. Each entry expands to detail the instructor associated with that lesson and their contact details.
              </p>
            </div>
            <MobileImage imageSource={jennyProfile} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>INSTRUCTOR SELECTION</h1>
            <p className={text}>
              Students may browse the list of available instructors, and their posted lessons, in order to find an appropriate match based upon style and skill level.
            </p>
          </div>
          <div className={flexRow}>
            <img className={smallImage} src={instructors} />
            <img className={smallImage} src={nigel} />
          </div>

          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>INSTRUCTOR PROFILE</h1>
              <p className={text}>
                The Instrcutor is able to view the lessons for which a student has registered to attend. They may also expand each entry to view the student's profile information.
              </p>
            </div>
            <MobileImage imageSource={nigelLessons} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>WHATS NEXT</h1>
            <p className={text}>
              This project could be treated with much more granularity. Filtering by instrument, as well as skill level, rather than simply listing them for the student to sort through. Maps and payment support would also be integral to the success of an app such as this.
            </p>
          </div>

          <span className={commentHeader}>LEAVE A COMMENT</span>
          <CommentForm projectId={1}/>
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

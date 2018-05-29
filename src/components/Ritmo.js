import React, { Component } from 'react'
import Form from './Form'
import {
  Comment,
  Image
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
            username={comment.username}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className={flexRow}>
            <Image imageSource={splash} />
            <div className={flexText}>
              <h1 className={subHeader}>PROJECT DETAILS</h1>
              <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>INSPIRATION</h1>
              <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Image imageSource={nigel} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>SIGN UP PROCESS</h1>
            <p className={text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={flexRow}>
            <img className={smallImage} src={lessonPost} />
            <img className={smallImage} src={myLessons} />
          </div>


          <div className={flexRow}>
            <div className={flexText}>
              <h1 className={subHeader}>STUDENT PROFILE</h1>
              <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Image imageSource={jennyProfile} />
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

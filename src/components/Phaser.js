import React, { Component } from 'react'
import Form from './Form'
import {
  Comment,
  DesktopImage
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
} from './styles/Phaser.css'

import splash from '../assets/phaser/phaser.png'

class Phaser extends Component {
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

          <h1 className={header}>SH'MUP THE ANTE / PLAT-FORM VALIDATION</h1>
          <p className={text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={flexRow}>
            <DesktopImage imageSource={splash} />
          </div>
          <div className={flexText}>
            <h1 className={subHeader}>PROJECT DETAILS</h1>
            <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

export default Phaser

import React, { Component } from 'react'
import CommentForm from './CommentForm'
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
import shmupSplash from '../assets/phaser/shmup-splash.png'
import platform1 from '../assets/phaser/platform1.png'

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
      this.props.comments.comments
        .filter(a => a.project_id === 2)
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

          <h1 className={header}>SH'MUP THE ANTE / PLAT-FORM VALIDATION</h1>
          <p className={text}>
            Two different browser (HTML5) games; a "shoot-em-up" retro Galaga game, as well as a "platformer" type.
          </p>

          <div className={flexText}>
            <h1 className={subHeader}>PROJECT DETAILS</h1>
            <p className={text}>
              To build these games I used the Phaser physics and game engine, a Javascript based development tool. I used Asesprite to generate the assets, teaching myself pixel art along the way.
            </p>
          </div>
          <div className={flexRow}>
            <DesktopImage imageSource={splash} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>SH'MUP THE ANTE</h1>
            <p className={text}>
              To build these games I used the Phaser physics and game engine, a Javascript based development tool. I used Asesprite to generate the assets, teaching myself pixel art along the way.
            </p>
          </div>
          <div className={flexRow}>
            <DesktopImage imageSource={shmupSplash} />
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>PLAT-FORM VALIDATION</h1>
            <p className={text}>
              To build these games I used the Phaser physics and game engine, a Javascript based development tool. I used Asesprite to generate the assets, teaching myself pixel art along the way.
            </p>
          </div>
          <div className={flexRow}>
            <DesktopImage imageSource={platform1} />
          </div>

          <span className={commentHeader}>LEAVE A COMMENT</span>
          <CommentForm projectId={2}/>
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

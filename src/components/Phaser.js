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
import shoot from '../assets/phaser/ship-shoot.png'
import gameOver from '../assets/phaser/game-over.png'
import platform1 from '../assets/phaser/platform1.png'
import platform2 from '../assets/phaser/platform2.png'

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
              Sh'mup The Ante is a Space Invaders or Galaga type arcade game. The player has a shield which degrades upon collision with enemy ships, as well as a high score that persists in local storage.
            </p>
          </div>
          <div className={flexRow}>
            <DesktopImage imageSource={shmupSplash} />
          </div>

          <div className={flexText}>
            <p className={text}>
              The player unlocks new weapons as the game progresses. Enemy ships become faster, and new projectiles become available at certain score thresholds.
            </p>
            <div className={flexRow}>
              <DesktopImage imageSource={shoot} />
            </div>
          </div>

          <div className={flexText}>
            <p className={text}>
              The game ends when the player's shield reaches zero.
            </p>
            <div className={flexRow}>
              <DesktopImage imageSource={gameOver} />
            </div>
          </div>

          <div className={flexText}>
            <h1 className={subHeader}>PLAT-FORM VALIDATION</h1>
            <p className={text}>
              Plat-Form Validation is a simple platformer where the player must reach the goal while collecting the "coins". If you look closely, the player model is a sprite version of myself.
            </p>
          </div>
          <div className={flexRow}>
            <DesktopImage imageSource={platform1} />
          </div>

          <div className={flexText}>
            <p className={text}>
              Coins appear in the top-left corner as they are collected. The orange space is considered "lava", and collision with these blocks results in the player being reset to the beginning of the course.
            </p>
            <div className={flexRow}>
              <DesktopImage imageSource={platform2} />
            </div>
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

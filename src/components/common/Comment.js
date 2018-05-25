import React from 'react'
import {
  container,
  userNameContainer,
  commentContainer
} from './styles/Comment.css'

const Comment = ({ username, comment }) => {
  return (
    <li className={container}>
      <div className={userNameContainer}>
        {username}
      </div>
      <div className={commentContainer}>
        {comment}
      </div>
    </li>
  )
}

export { Comment }

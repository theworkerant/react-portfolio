import React from 'react'
import {
  container,
  userNameContainer,
  commentContainer,
  dateTime
} from './styles/Comment.css'

const Comment = ({ username, comment, date }) => {
  const parseDate = () => {
    const datePosted = `
      ${date.slice(5, 7)} / ${date.slice(8, 10)} / ${date.slice(0, 4)}
    `
    return (
      <div className={dateTime}>
        {datePosted}
      </div>
    )
  }
  const datePosted = `
    ${date.slice(5, 7)} / ${date.slice(8, 10)} / ${date.slice(0, 4)}
  `
  return (
    <li className={container}>
      <div className={userNameContainer}>
        <div>          
          {username}
        </div>
        <div>
          {parseDate()}
        </div>
      </div>
      <div className={commentContainer}>
        {comment}
      </div>
    </li>
  )
}

export { Comment }

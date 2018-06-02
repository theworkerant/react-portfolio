import React from 'react'
import {
  container,
  userNameContainer,
  companyContainer,
  commentContainer,
  nameStyle,
  dateStyle,
  companyStyle,
  dateTime
} from './styles/Comment.css'

const Comment = ({ name, comment, company, date }) => {
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
        <div className={companyContainer}>
          <span className={nameStyle}>
            {name}
          </span>
          <span className={companyStyle}>
            {company}
          </span>
        </div>
        <span className={dateStyle}>
          {parseDate()}
        </span>
      </div>
      <div className={commentContainer}>
        {comment}
      </div>
    </li>
  )
}

export { Comment }

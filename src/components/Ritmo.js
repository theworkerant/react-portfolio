import React, { Component } from 'react'
import Form from './Form'
import {
  Comment
} from './common'

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
          />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div>
          <Form />
        </div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

export default Ritmo

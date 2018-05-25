import React, { Component } from 'react'

import Form from './Form'
import { Comment } from './common'

class Home extends Component {
  componentDidMount = () => {
    this.props.getComments()
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.comments !== this.props.comments) {
      this.props.getComments()
    }
  }

  renderComments = () => {
    return (
      this.props.comments.comments.map(comment => {
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

export default Home

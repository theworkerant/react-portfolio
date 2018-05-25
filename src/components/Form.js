import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import { postComment } from '../actions'

import {
  container,
  inputContainer,
  formContainer,
  inputStyle,
  labelStyle,
  inputCommentStyle
} from './styles/Form.css'

import { Button } from './common'

class Form extends Component {

  renderNameField(field) {
    const { meta: { touched, error } } = field
    return (
      <div className={inputContainer}>
        <label className={labelStyle}>{field.label}</label>
        <input
          className={inputStyle}
          type="text"
          {...field.input}
        />
        <div>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  renderCommentField(field) {
    const { meta: { touched, error } } = field
    return (
      <div className={inputContainer}>
        <label className={labelStyle}>{field.label}</label>
        <textarea
          className={inputCommentStyle}
          type="text"
          {...field.input}
        />
        <div>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.postComment(values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name"
          name="name"
          component={this.renderNameField}
        />
        <Field
          label="Comment"
          name="comment"
          component={this.renderCommentField}
        />
        <Button>SUBMIT</Button>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Enter a name'
  }
  if (!values.comment) {
    errors.comment = 'Enter a comment'
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'CommentsForm'
})(
  connect(null, { postComment })(Form)
)

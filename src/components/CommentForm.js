import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import { postComment } from '../actions'

import {
  container,
  inputContainer,
  inputStyle,
  labelStyle,
  inputCommentStyle,
  errorStyle
} from './styles/Form.css'

import { Button } from './common'

class CommentForm extends Component {

  renderSingleField(field) {
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
    this.props.postComment(values, this.props.projectId)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className={container}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Name"
            name="name"
            component={this.renderSingleField}
          />
          <Field
            label="Company / Association"
            name="company"
            component={this.renderSingleField}
          />
          <Field
            label="Comment"
            name="comment"
            component={this.renderCommentField}
          />
          <Button>SUBMIT</Button>
        </form>
      </div>
    )
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('CommentForm'))
}

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = <span className={errorStyle}>Enter a name</span>
  }
  if (!values.comment) {
    errors.comment = <span className={errorStyle}>Enter a comment</span>
  }
  if (!values.company) {
    errors.company = <span className={errorStyle}>Enter a company</span>
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'CommentForm',
  onSubmitSuccess: afterSubmit
})(
  connect(null, { postComment })(CommentForm)
)

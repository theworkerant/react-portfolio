import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import { sendEmail } from '../actions'

import {
  container,
  inputContainer,
  inputStyle,
  labelStyle,
  inputCommentStyle,
  errorStyle,
  notification
} from './styles/ContactForm.css'

import { Button } from './common'

class ContactForm extends Component {
  state = {
    sent: false
  }

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
    this.props.sendEmail(values)
    this.setState({
      sent: true
    })
  }

  render() {
    const { handleSubmit } = this.props
    const sentMessage = this.state.sent ? 'Thanks!' : ''

    return (
      <div className={container}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Name"
            name="name"
            component={this.renderSingleField}
          />
          <Field
            label="Email"
            name="email"
            component={this.renderSingleField}
          />
          <Field
            label="Phone"
            name="phone"
            component={this.renderSingleField}
          />
          <Field
            label="Message"
            name="message"
            component={this.renderCommentField}
          />
          <Button>SUBMIT</Button>
        </form>
        <span className={notification}>{sentMessage}</span>
      </div>
    )
  }
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('ContactForm'))
}

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = <span className={errorStyle}>Enter a name</span>
  }
  if (!values.email) {
    errors.email = <span className={errorStyle}>Enter a email</span>
  }
  if (!values.phone) {
    errors.phone = <span className={errorStyle}>Enter a phone number</span>
  }
  if (!values.message) {
    errors.message = <span className={errorStyle}>Enter a message</span>
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'ContactForm',
  onSubmitSuccess: afterSubmit
})(
  connect(null, { sendEmail })(ContactForm)
)

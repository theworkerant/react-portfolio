import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contact from '../components/Contact'

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)


const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)

export default ContactContainer

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComments } from '../actions'
import Ritmo from '../components/Ritmo'

const mapStateToProps = (state) => ({
  comments: state.comments
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getComments
}, dispatch)

const RitmoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ritmo)

export default RitmoContainer

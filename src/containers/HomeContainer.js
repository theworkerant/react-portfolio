import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComments } from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  comments: state.comments
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getComments
}, dispatch)

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer

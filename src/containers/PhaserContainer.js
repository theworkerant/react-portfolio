import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComments } from '../actions'
import Phaser from '../components/Phaser'

const mapStateToProps = (state) => ({
  comments: state.comments
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getComments
}, dispatch)

const PhaserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Phaser)

export default PhaserContainer

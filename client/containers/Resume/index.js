import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'
import Header from '../../components/Header'
import CareerObjective from '../../components/CareerObjective'

class Resume extends Component {
  render() {
    return (
      <div>
        <Header />
        <CareerObjective />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume)

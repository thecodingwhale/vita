import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'
import Header from '../../components/Header'
import CareerObjective from './components/CareerObjective'
import Development from './components/Development'
import Employment from './components/Employment'
import Education from './components/Education'

class Resume extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={style.container}>
          <CareerObjective />
          <Development />
          <Employment />
          <Education />
        </div>
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

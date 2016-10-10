
import React, { Component } from 'react'
import style from './style.css'

class MainContent extends Component {
  render() {
    return (
      <div className={style.mainContent}>
        {this.props.children}
      </div>
    )
  }
}

export default MainContent

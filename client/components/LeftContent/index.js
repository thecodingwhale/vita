
import React, { Component } from 'react'
import style from './style.css'

class LeftContent extends Component {
  render() {
    return (
      <div className={style.leftContent}>
        {this.props.children}
      </div>
    )
  }
}

export default LeftContent

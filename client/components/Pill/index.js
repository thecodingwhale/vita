
import React, { Component } from 'react'
import style from './style.css'

class Pill extends Component {
  render() {
    return (
      <span className={style.pill}>
        {this.props.children}
      </span>
    )
  }
}

export default Pill


import React, { Component } from 'react'
import style from './style.css'

class Layout extends Component {
  render() {
    return (
      <div className={style.layout}>
        {this.props.children}
      </div>
    )
  }
}

export default Layout

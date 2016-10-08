
import React, { Component } from 'react'
import base from '../../constants/base.css'

class Content extends Component {
  render() {
    return (
      <div className={base.content}>
        {this.props.children}
      </div>
    )
  }
}

export default Content

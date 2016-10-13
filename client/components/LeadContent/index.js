
import React, { Component } from 'react'
import style from './style.css'

class LeadContent extends Component {
  render() {
    return (
      <div className={style.lead}>
        {this.props.children}
      </div>
    )
  }
}

export default LeadContent

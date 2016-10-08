
import React, { Component } from 'react'
import style from './style.css'

class PageTitle extends Component {
  render() {
    return (
      <div className={style.pageTitle}>
        {this.props.children}
      </div>
    )
  }
}

export default PageTitle

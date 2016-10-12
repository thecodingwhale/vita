
import React, { Component } from 'react'
import cx from "classnames"
import style from './style.css'

class PageTitle extends Component {
  render() {
    let classNames = cx(style.pageTitle, {
      [style.small]: (this.props.size == "small") ? true : false,
      [style.noMargin]: this.props.noMargin,
    });
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    )
  }
}

export default PageTitle

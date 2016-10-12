
import React, { Component } from 'react'
import style from './style.css'
import cx from "classnames"

class ListView extends Component {
  render() {
    let className = cx(style.listView, {
      [style.clean]: this.props.clean,
      [style.inline]: this.props.inline
    });
    return (
      <ul className={className}>
        {this.props.children}
      </ul>
    )
  }
}

export default ListView

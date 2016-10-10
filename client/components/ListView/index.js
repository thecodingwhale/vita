
import React, { Component } from 'react'
import style from './style.css'

class ListView extends Component {
  render() {
    return (
      <ul className={style.listView}>
        {this.props.children}
      </ul>
    )
  }
}

export default ListView

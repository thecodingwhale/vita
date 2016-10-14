
import React, { Component } from 'react'
import style from './style.css'

class Link extends Component {
  render() {
    if (this.props.blank == true) {
      return (
        <a className={style.link} href={this.props.link} target="_blank">
          {this.props.title}
        </a>
      )
    }
    else {
      return (
        <a className={style.link} href={this.props.link}>
          {this.props.title}
        </a>
      )
    }
  }
}

export default Link

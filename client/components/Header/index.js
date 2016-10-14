
import React, { Component } from 'react'
import base from '../../constants/base.css'
import style from './style.css'

class Header extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={base.content}>
            <div className={style.header}>
              <h1 className={style.title}>
                {this.props.name}
              </h1>
              <div className={style.sub}>
                {this.props.position}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

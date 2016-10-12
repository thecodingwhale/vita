
import React, { Component } from 'react'
import PageTitle from '../PageTitle'
import style from './style.css'

class TitleDescription extends Component {
  renderSub() {
    if (typeof this.props.sub !== "undefined" || this.props.sub != "") {
      return (
        <div className={style.sub}>{this.props.sub}</div>
      )
    }

    return '';
  }
  render() {
    return (
      <div className={style.titleDescription}>
        <PageTitle
          size="small"
          noMargin
        >
          {this.props.title}
        </PageTitle>
        <div>
          {this.renderSub()}
          <div className={style.description}>
            <small>{this.props.description}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleDescription

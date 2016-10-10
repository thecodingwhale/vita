
import React, { Component } from 'react'
import PageTitle from '../PageTitle'
import style from './style.css'

class TitleDescription extends Component {
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
          {this.props.sub}<br />
          <small>{this.props.description}</small>
        </div>
      </div>
    )
  }
}

export default TitleDescription

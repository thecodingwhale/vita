
import React, { Component } from 'react'
import base from '../../../../constants/base.css'
import style from './style.css'
import PageTitle from '../../../../components/PageTitle'
import Content from '../../../../components/Content'

class Section extends Component {
  render() {
    return (
      <Content>
        <PageTitle>
          {this.props.title}
        </PageTitle>
        {this.props.children}
      </Content>
    )
  }
}

export default Section

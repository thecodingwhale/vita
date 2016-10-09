
import React, { Component } from 'react'
import base from '../../../../constants/base.css'
import style from './style.css'
import PageTitle from '../../../../components/PageTitle'
import Content from '../../../../components/Content'

class CareerObjective extends Component {
  render() {
    return (
      <div className={style.container}>
        <Content>
            <PageTitle>
              Summary
            </PageTitle>
            <p className={style.lead}>
                Constantly learning and adopting new things to improve my current knowledge and workflow of building things for web application effectively. Proactively shows interests and try to build/implement in my current development workflow. Willingness to learn other languages to update my current toolset are definitely welcome.
            </p>
        </Content>
      </div>
    )
  }
}

export default CareerObjective

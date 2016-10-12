
import React, { Component } from 'react'
import PageTitle from '../../../../components/PageTitle'
import Content from '../../../../components/Content'
import TitleDescription from '../../../../components/TitleDescription'

class Education extends Component {
  render() {
    return (
      <Content>
        <PageTitle>
          Education
        </PageTitle>
        <TitleDescription
          title="Bachelor of Science major in Computer Science"
          sub="University of Perpetual Help System GMA Cavite"
          description="2007 - 2011"
        />
        <TitleDescription
          title="Civil Engeering Technology"
          sub="Technological University of the Philippines, Cavite Campus"
          description="2006 - 2007"
        />
      </Content>
    )
  }
}

export default Education

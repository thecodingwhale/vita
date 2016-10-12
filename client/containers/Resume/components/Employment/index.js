
import React, { Component } from 'react'
import PageTitle from '../../../../components/PageTitle'
import Content from '../../../../components/Content'
import TitleDescription from '../../../../components/TitleDescription'
import Layout from '../../../../components/Layout'
import LeftContent from '../../../../components/LeftContent'
import MainContent from '../../../../components/MainContent'
import ListView from '../../../../components/ListView'
import Pill from '../../../../components/Pill'
import content from './content'

class Employment extends Component {
  render() {
    return (
      <Content>
          <PageTitle>
            Employment
          </PageTitle>
          {content.map((data, id) => {
            return (
              <Layout key={id}>
                <LeftContent>
                  <TitleDescription
                    title={data.companyName}
                    sub={data.position}
                    description={data.date}
                  />
                  {data.tags.map((tag, key)=> {
                    return (
                      <Pill key={key}>
                        {tag}
                      </Pill>
                    )
                  })}
                </LeftContent>
                <MainContent>
                  <ListView>
                    {data.experiences.map((experience, listKey)=> {
                      return (
                        <li key={listKey}>
                          {experience}
                        </li>
                      )
                    })}
                  </ListView>
                </MainContent>
              </Layout>
            )
          })}
      </Content>
    )
  }
}

export default Employment

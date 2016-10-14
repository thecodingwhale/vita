import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ContentActions from '../../actions/contents'
import style from './style.css'
import Header from '../../components/Header'
import Section from './components/Section'

import LeadContent from '../../components/LeadContent'
import TitleDescription from '../../components/TitleDescription'
import Layout from '../../components/Layout'
import LeftContent from '../../components/LeftContent'
import MainContent from '../../components/MainContent'
import ListView from '../../components/ListView'
import Pill from '../../components/Pill'

class Resume extends Component {
  componentWillMount() {
    this.props.actions.fetchContent()
  }
  render() {
    const { contents } = this.props
    if (contents.length == 0) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    else {
      const { header, careerObjective, development, employment, education } = contents
      return (
        <div>
          <Header
            name={header.name}
            position={header.position}
          />
          <div className={style.container}>
            <Section title="Career Objective">
              <LeadContent>
                {careerObjective.content}
              </LeadContent>
            </Section>
            <Section title="Development">
              {(development.map((dev, id) => {
                return (
                  <Layout key={id}>
                    <LeftContent>
                      <TitleDescription
                        title={dev.title}
                        sub={dev.description}
                      />
                    </LeftContent>
                    <MainContent>
                      <ListView>
                        {(dev.summaries.map((summary, id) => {
                          return (
                            <li key={id}>
                              {summary}
                            </li>
                          )
                        }))}
                      </ListView>
                    </MainContent>
                  </Layout>
                )
              }))}
            </Section>
            <Section title="Employment">
              {employment.map((data, id) => {
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
            </Section>
            <Section title="Education">
              {education.map((data, id) => {
                return (
                  <TitleDescription
                    key={id}
                    title={data.course}
                    sub={data.school}
                    description={data.date}
                  />
                )
              })}
            </Section>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    contents: state.contents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContentActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume)

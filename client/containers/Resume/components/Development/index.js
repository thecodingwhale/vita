
import React, { Component } from 'react'
import PageTitle from '../../../../components/PageTitle'
import Content from '../../../../components/Content'
import TitleDescription from '../../../../components/TitleDescription'
import Layout from '../../../../components/Layout'
import LeftContent from '../../../../components/LeftContent'
import MainContent from '../../../../components/MainContent'
import ListView from '../../../../components/ListView'

class Development extends Component {
  render() {
    return (
      <Content>
        <PageTitle>
          Development
        </PageTitle>
        <Layout>
          <LeftContent>
            <TitleDescription
              title="Frontend"
              sub="I considered myself dealing more with designs, colors and converting it to a great user experience."
            />
          </LeftContent>
          <MainContent>
            <ListView>
              <li>
                a clean, flat and minimal design approach for user interfaces.
              </li>
              <li>
                creating user stories. wireframes, mockups and prototyping.
              </li>
              <li>
                task automation and automation for smooth frontend workflow.
              </li>
              <li>
                cross browser and unit testing.
              </li>
              <li>
                es6, modular javscript and object oriented implementation.
              </li>
              <li>
                deploy script and build automation.
              </li>
            </ListView>
          </MainContent>
        </Layout>
        <Layout>
          <LeftContent>
            <TitleDescription
              title="Backend Development"
              sub="Working with backend services, bulk JSON dataset, different RESTful APIs and more."
            />
          </LeftContent>
          <MainContent>
            <ListView>
              <li>
                understand the concepts of SOLID and OOP principles
              </li>
              <li>
                knowledgable working with RESTful APIs and JSON.
              </li>
              <li>
                understand concepts of BDD and TDD.
              </li>
            </ListView>
          </MainContent>
        </Layout>
      </Content>
    )
  }
}

export default Development

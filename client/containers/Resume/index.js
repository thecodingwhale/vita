/* eslint-disable arrow-body-style */
/* eslint-disable arrow-spacing */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ContentActions from '../../actions/contents';
import style from './style.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Section from './components/Section';
import LeadContent from '../../components/LeadContent';
import TitleDescription from '../../components/TitleDescription';
import Layout from '../../components/Layout';
import LeftContent from '../../components/LeftContent';
import MainContent from '../../components/MainContent';
import ListView from '../../components/ListView';
import Pill from '../../components/Pill';
import Link from '../../components/Link';

class Resume extends Component {
  componentWillMount() {
    this.props.actions.fetchContent();
  }
  render() {
    const { contents } = this.props;
    if (contents.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    const { header, careerObjective, development, employment, education, contact } = contents;
    return (
      <div>
        <Header
          name={header.name}
          position={header.position}
        />
        <Container>
          <Section title="Career Objective">
            <LeadContent>
              {careerObjective.content}
            </LeadContent>
          </Section>
          <Section title="Development">
            {(development.map((dev, id) => {
              return (
                <Layout key={id}>
                  <TitleDescription
                    title={dev.title}
                    sub={dev.description}
                  />
                  <ListView>
                    {(dev.summaries.map((summary, summaryId) => {
                      return (
                        <li key={summaryId}>
                          {summary}
                        </li>
                      );
                    }))}
                  </ListView>
                </Layout>
              );
            }))}
          </Section>
          <Section title="Employment">
            {employment.map((data, id) => {
              return (
                <Layout key={id}>
                  <TitleDescription
                    title={data.companyName}
                    sub={data.position}
                    description={data.date}
                  />
                  <LeftContent>
                    {data.tags.map((tag, key)=> {
                      return (
                        <Pill key={key}>
                          {tag}
                        </Pill>
                      );
                    })}
                  </LeftContent>
                  <MainContent>
                    <ListView>
                      {data.experiences.map((experience, listKey)=> {
                        return (
                          <li key={listKey}>
                            {experience}
                          </li>
                        );
                      })}
                    </ListView>
                  </MainContent>
                </Layout>
              );
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
              );
            })}
          </Section>
          <Section title="Contact">
            <ListView clean>
              {contact.map((list, id) => {
                return (
                  <li key={id}>
                    {list.type}:<br />
                    <Link
                      link={list.link}
                      blank={list.blank}
                      mailTo={list.mailTo}
                    >
                      {list.link}
                    </Link>
                  </li>
                );
              })}
            </ListView>
          </Section>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contents: state.contents,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Resume);

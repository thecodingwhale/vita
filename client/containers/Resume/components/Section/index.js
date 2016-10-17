/* eslint-disable arrow-body-style */

import React from 'react';
import PageTitle from '../../../../components/PageTitle';
import Content from '../../../../components/Content';

const Section = (props) => {
  return (
    <Content>
      <PageTitle>
        {props.title}
      </PageTitle>
      {props.children}
    </Content>
  );
};

export default Section;

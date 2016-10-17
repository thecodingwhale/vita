/* eslint-disable arrow-body-style */

import React from 'react';
import base from '../../constants/base.css';

const Content = (props) => {
  return (
    <div className={base.content}>
      {props.children}
    </div>
  );
};

export default Content;

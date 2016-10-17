/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const LeadContent = (props) => {
  return (
    <div className={style.lead}>
      {props.children}
    </div>
  );
};

export default LeadContent;

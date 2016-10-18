/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const Content = (props) => {
  return (
    <div className={style.content}>
      {props.children}
    </div>
  );
};

export default Content;

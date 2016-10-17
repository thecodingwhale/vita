/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const LeftContent = (props) => {
  return (
    <div className={style.leftContent}>
      {props.children}
    </div>
  );
};

export default LeftContent;

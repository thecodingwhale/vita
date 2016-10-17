/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const Pill = (props) => {
  return (
    <span className={style.pill}>
      {props.children}
    </span>
  );
};

export default Pill;

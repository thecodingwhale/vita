/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const Container = (props) => {
  return (
    <div className={style.container}>
      {props.children}
    </div>
  );
};

export default Container;

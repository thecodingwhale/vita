/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const MainContent = (props) => {
  return (
    <div className={style.mainContent}>
      {props.children}
    </div>
  );
};

export default MainContent;

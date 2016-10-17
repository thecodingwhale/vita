/* eslint-disable arrow-body-style */

import React from 'react';
import style from './style.css';

const Layout = (props) => {
  return (
    <div className={style.layout}>
      {props.children}
    </div>
  );
};

export default Layout;

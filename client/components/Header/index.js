/* eslint-disable arrow-body-style */

import React from 'react';
import base from '../../constants/base.css';
import style from './style.css';

const Header = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={base.content}>
          <div className={style.header}>
            <h1 className={style.title}>
              {props.name}
            </h1>
            <div className={style.sub}>
              {props.position}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

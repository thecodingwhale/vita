/* eslint-disable arrow-body-style */

import React from 'react';
import base from '../../constants/base.css';
import style from './style.css';
import Container from '../Container';

const Header = (props) => {
  return (
    <div className={style.wrapper}>
      <Container>
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
      </Container>
    </div>
  );
};

export default Header;

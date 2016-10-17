
import React from 'react';
import style from './style.css';

const Link = (props) => {
  if (props.blank === true) {
    return (
      <a className={style.link} href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
  return (
    <a className={style.link} href={props.link}>
      {props.children}
    </a>
  );
};

export default Link;

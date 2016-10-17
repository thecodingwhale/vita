
import React from 'react';
import cx from 'classnames';
import style from './style.css';

const ListView = (props) => {
  const className = cx(style.listView, {
    [style.clean]: props.clean,
    [style.inline]: props.inline,
  });
  return (
    <ul className={className}>
      {props.children}
    </ul>
  );
};

export default ListView;

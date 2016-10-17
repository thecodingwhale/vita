
import React from 'react';
import cx from 'classnames';
import style from './style.css';

const PageTitle = (props) => {
  const classNames = cx(style.pageTitle, {
    [style.small]: (props.size === 'small'),
    [style.noMargin]: props.noMargin,
  });
  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};

export default PageTitle;

// @flow

import React from 'react';
import cx from 'classnames';
import styles from './style.css';

type Props = {
  onClick: () => {};
  children: React.Component<*>;
  className: string;
};

const Button = (props: Props) => (
  <button
    onClick={props.onClick}
    className={cx(styles.container, styles.borderButton, props.className)}
  >
    {
      props.children
    }
  </button>
);

export default Button;

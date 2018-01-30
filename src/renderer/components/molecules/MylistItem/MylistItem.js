// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  num: number;
  title: string;
  onClick: () => {};
};

const MylistItem = (props: Props) => (
  <div
    onClick={props.onClick}
    className={styles.container}
  >
    <p>{props.title}</p>
    <span>{props.num}</span>
  </div>
);

export default MylistItem;

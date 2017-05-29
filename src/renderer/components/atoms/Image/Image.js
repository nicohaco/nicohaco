// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  src: string;
};

const Image = (props: Props) => (
  <img
    src={props.src}
    className={styles.container}
  />
);

export default Image;

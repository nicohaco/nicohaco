// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  src: string;
};

const Image = (props: Props) => {
  let el;

  return (
    <img
      src={props.src}
      ref={(img) => el = img}
      onError={() => el.src = el.src.split('.M')[0] /* TODO: fix */ }
      className={styles.container}
    />
  );
};

export default Image;

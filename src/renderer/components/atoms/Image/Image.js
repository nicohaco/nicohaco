// @flow

import React from 'react';
import cx from 'classnames';
import styles from './style.css';

type Props = {
  src: string;
  className: string;
};

const Image = (props: Props) => {
  let el;

  return (
    <img
      src={props.src}
      ref={(img) => el = img}
      onError={() => el.src = el.src.split('.M')[0]}
      className={cx(styles.container, props.className)}
    />
  );
};

export default Image;

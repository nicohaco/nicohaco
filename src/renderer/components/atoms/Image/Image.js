// @flow

import React from 'react';
import cx from 'classnames';
import styles from './style.css';

type Props = {
  src: string;
  className: string;
};

const Image = (props: Props) => {
  let el: {
    src: '';
  };

  let cnt = 0;

  return (
    <img
      src={props.src}
      ref={(img) => {
        if (img) el = img;
      }}
      onError={() => {
        if (cnt === 1) {
          el.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        }
        cnt++;

        el.src = el.src.split('.M')[0];
      }}
      className={cx(styles.container, props.className)}
    />
  );
};

export default Image;

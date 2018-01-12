// @flow

import React from 'react';
import { Circle as Image } from '../../atoms/Image';
import styles from './style.css';

type Props = {
  onClick: () => {};
  thumbnailUrl: string;
};

const UserBox = (props: Props) => (
  <div
    className={styles.container}
    onClick={props.onClick}
  >
    <Image
      src={props.thumbnailUrl}
      width={35}
    />
  </div>
);

export default UserBox;

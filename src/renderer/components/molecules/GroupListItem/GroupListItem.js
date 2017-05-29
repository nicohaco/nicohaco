// @flow

import React from 'react';
import cx from 'classnames';
import photon from '../../../styles/photon';
import { Tile as Image } from '../../atoms/Image';
import styles from './style.css';

type Props = {
  key: string;
  src: Array<string>;
  title: string;
  onClick: () => {};
  totalTime: string;
  totalVideos: number;
  description: string;
};

const GroupListItem = (props: Props) => (
  <li
    onClick={props.onClick}
    className={cx(photon['list-group-item'], styles.container)}
  >
    <Image
      src={props.src}
      size={60}
    />
    <div className={styles.textBox}>
      <strong
        title={props.title}
        className={styles.title}
      >
        {props.title}
      </strong>
      <p className={styles.mylistInfo}>
        {
          props.totalVideos ?
            `${props.totalVideos.toString().padStart(2, '0')}曲 ${props.totalTime}` :
            ''
        }
      </p>
    </div>
  </li>
);

export default GroupListItem;

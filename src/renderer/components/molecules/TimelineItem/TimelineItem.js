// @flow

import React from 'react';
import Overlay from '../ItemBoxOverlay';
import Image from '../../atoms/Image';
import styles from './style.css';

const TimelineItem = (props) => (
  <div className={styles.container}>
    <div className={styles.img}>
      <Image
        src={props.videoImg}
      />
      <Overlay
        onClick={props.onClick}
        watchId={props.watchId}
        className={styles.overlay}
      />
    </div>
    <div className={styles.info}>
      <span className={styles.action}>{props.action}</span>
      <span>{props.createdAt}</span>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.creator}>
        <Image
          src={props.creatorImg}
          className={styles.creatorImg}
        />
        <span>{props.creatorName}</span>
      </div>
    </div>
  </div>
);

export default TimelineItem;

// @flow

import { shell } from 'electron';
import React from 'react';
import cx from 'classnames';
import { Icon } from '../../atoms/Button';
import styles from './style.css';

type Props = {
  watchId: string;
  actions: {
    icon: string;
    onClick: () => {};
  }[];
  className: string;
  totalTime: string;
};

const ItemBoxOverlay = (props: Props) => (
  <div className={cx(styles.container, props.className)}>
    <span
      onClick={(e) => {
        e.stopPropagation();
        shell.openExternal(`http://www.nicovideo.jp/watch/${props.watchId}`);
      }}
      className={styles.videoId}
    >
      {
        props.watchId
      }
    </span>
    <Icon
      icon="play"
      size="3rem"
      className={styles.play}
    />
    <div className={styles.menu}>
      {
        props.actions.map((item, i) => (
          <Icon
            key={`${i}__${item.icon}`}
            icon={item.icon}
            size="1.1rem"
            onClick={item.onClick}
          />
        ))
      }
    </div>
    <span className={styles.time}>{props.totalTime}</span>
  </div>
);

export default ItemBoxOverlay;

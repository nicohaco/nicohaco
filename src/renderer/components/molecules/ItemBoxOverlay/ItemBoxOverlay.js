// @flow

import { shell } from 'electron';
import React from 'react';
import cx from 'classnames';
import { Icon } from '../../atoms/Button';
import MusicIcon from 'react-icons/lib/md/music-note';
import styles from './style.css';

type Props = {
  onClick: () => void;
  watchId: string;
  actions: {
    icon: string;
    onClick: () => {};
  }[];
  className: string;
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
    <div className={styles.playBox}>
      <MusicIcon
        size="2rem"
        onClick={() => props.onClick('music')}
      />
      <Icon
        icon="video"
        size="2rem"
        onClick={() => props.onClick('video')}
      />
    </div>
    <div className={styles.menu}>
      {
        props.actions.map((item, i) => (
          <Icon
            key={`${i}__${item.icon}`}
            icon={item.icon}
            size="1.3rem"
            onClick={item.onClick}
          />
        ))
      }
    </div>
  </div>
);

export default ItemBoxOverlay;

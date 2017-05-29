// @flow

import { shell } from 'electron';
import React from 'react';
import cx from 'classnames';
import Icon from '../../atoms/Icon';
import { Circle as Image } from '../../atoms/Image';
import styles from './style.css';

type Props = {
  poster: string;
  videoId: string;
  viewCount: string;
  postedDate: string;
  commentCount: string;
  mylistCount: string;
  posterThumbnailUrl: string;
};

const prefix = 'http://www.nicovideo.jp/';

const VideoInfo = (props: Props) => (
  <div className={styles.container}>
    <div className={cx(styles.box, styles.poster)}>
      <Image
        src={props.posterThumbnailUrl}
        width="25"
        height="25"
      />
      <span
        title="poster"
        className={styles.value}
      >
        {props.poster}
      </span>
    </div>
    <div
      className={cx(styles.box, styles.videoId)}
      onClick={() => shell.openExternal(`${prefix}/watch/${props.videoId}`)}i
    >
      <Icon icon="monitor" />
      <span
        title="videoID"
        className={styles.value}
      >
        {props.videoId}
      </span>
    </div>
    <div className={cx(styles.box, styles.date)}>
      <Icon icon="publish" />
      <span
        title="postedDate"
        className={styles.value}
      >
        {props.postedDate}
      </span>
    </div>
    <div className={cx(styles.box, styles.num)}>
      <Icon icon="users" />
      <span
        title="view count"
        className={styles.value}
      >
        {props.viewCount}
      </span>
    </div>
    <div className={cx(styles.box, styles.num)}>
      <Icon icon="pencil" />
      <span
        title="comment count"
        className={styles.value}
      >
        {props.commentCount}
      </span>
    </div>
    <div className={cx(styles.box, styles.num)}>
      <Icon icon="folder" />
      <span
        title="mylist count"
        className={styles.value}
      >
        {props.mylistCount}
      </span>
    </div>
  </div>
);

export default VideoInfo;

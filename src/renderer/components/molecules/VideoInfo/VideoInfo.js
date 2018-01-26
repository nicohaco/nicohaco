// @flow

import { shell } from 'electron';
import React from 'react';
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
    {
      props.posterThumbnailUrl ? (
        <div className={styles.box}>
          <Image
            src={props.posterThumbnailUrl}
            width="30"
            height="30"
          />
          <span title="poster">
            {props.poster}
          </span>
        </div>
      ) : null
    }
    <div
      className={styles.box}
      onClick={() => shell.openExternal(`${prefix}/watch/${props.videoId}`)}i
    >
      <span title="videoID">ID {props.videoId}</span>
    </div>
    {
      props.postedData ? (
        <div className={styles.box}>
          <span title="postedDate">投稿日 {props.postedDate}</span>
        </div>
      ) : null
    }
    {
      props.viewCount ? (
        <div className={styles.box}>
          <span title="view count">視聴回数 {Number(props.viewCount).toLocaleString()}</span>
        </div>
      ) : null
    }
    {
      props.commentCount ? (
        <div className={styles.box}>
          <span title="comment count">コメント数 {Number(props.commentCount).toLocaleString()}</span>
        </div>
      ) : null
    }
    {
      props.mylistCount ? (
        <div className={styles.box}>
          <span title="mylist count">マイリスト数 {Number(props.mylistCount).toLocaleString()}</span>
        </div>
      ) : null
    }
  </div>
);

export default VideoInfo;

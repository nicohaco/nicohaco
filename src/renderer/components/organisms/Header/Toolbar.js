// @flow

import React from 'react';
import ArrowLeftIcon from 'react-icons/lib/md/keyboard-arrow-left';
import ArrowRightIcon from 'react-icons/lib/md/keyboard-arrow-right';
import VideoInfo from '../../../components/molecules/VideoInfo';
import styles from './toolbar.style.css';

import type { Props } from '../../../containers/Header/Toolbar';

const Toolbar = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.controller}>
      <ArrowLeftIcon
        size="1.6rem"
        onClick={props.goBackPage}
      />
      <ArrowRightIcon
        size="1.6rem"
        onClick={props.goForwardPage}
      />
    </div>
    {
      props.videoId !== '' ? (
        <VideoInfo
          poster={props.poster}
          videoId={props.videoId}
          viewCount={props.viewCount}
          postedDate={props.postedDate}
          mylistCount={props.mylistCount}
          commentCount={props.commentCount}
          goToUserPage={() => props.goToUserPage(props.posterId)}
          posterThumbnailUrl={props.posterThumbnailUrl}
        />
      ) : null
    }
  </div>
);

export default Toolbar;

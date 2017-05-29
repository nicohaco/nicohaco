// @flow

import React from 'react';
import VideoInfo from '../../../components/molecules/VideoInfo';
import FeatureActions from '../../../components/molecules/FeatureActions';
import styles from './toolbar.style.css';

type Props = {
  poster: string;
  videoId: string;
  pushPage: () => {};
  viewCount: string;
  postedDate: string;
  mylistCount: string;
  commentCount: string;
  posterThumbnailUrl: string;
};

const Toolbar = (props: Props) => (
  <div className={styles.container}>
    <FeatureActions pushPage={props.pushPage} />
    {
      props.videoId !== '' ? (
        <VideoInfo
          poster={props.poster}
          videoId={props.videoId}
          viewCount={props.viewCount}
          postedDate={props.postedDate}
          mylistCount={props.mylistCount}
          commentCount={props.commentCount}
          posterThumbnailUrl={props.posterThumbnailUrl}
        />
      ) : null
    }
  </div>
);

export default Toolbar;

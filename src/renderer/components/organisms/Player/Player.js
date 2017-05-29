// @flow

import React from 'react';
import Audio from '../../atoms/Audio';
import AudioInfo from '../../molecules/AudioInfo';
import AudioController from '../../molecules/AudioController';
import styles from './style.css';

import type { Current } from '../../../types/states/player';

type Props = {
  src: string;
  index: number;
  volume: number;
  status: boolean;
  videoInfo: Current;
  elapsedTime: number;
  getDuration: (number) => {};
  toggleStatus: () => {};
  changeVolume: () => {};
  displayedLoader: boolean;
  playSpecificAudio: (number) => {};
  updateElapsedTime: (number) => {};
  changeLoadingStatus: () => {};
};

const Player = (props: Props) => (
  <div className={styles.container}>
    <AudioController
      volume={props.volume}
      status={props.status}
      disabled={!props.src || !props.displayedLoader}
      playPrev={() => props.playSpecificAudio(props.index - 1)}
      playNext={() => props.playSpecificAudio(props.index + 1)}
      elapsedTime={props.elapsedTime}
      changeVolume={props.changeVolume}
      toggleStatus={props.toggleStatus}
    />
    <AudioInfo
      title={props.videoInfo.title}
      disabled={!props.src}
      className={styles.info}
      totalTime={props.videoInfo.totalTime}
      elapsedTime={props.elapsedTime}
      thumbnailUrl={props.videoInfo.thumbnailUrl}
      toggleStatus={props.toggleStatus}
      displayedLoader={props.displayedLoader}
      updateElapsedTime={props.updateElapsedTime}
    />
    <Audio
      src={props.src}
      volume={props.volume}
      status={props.status}
      className={styles.audio}
      getDuration={props.getDuration}
      elapsedTime={props.elapsedTime}
      notifyEnded={() => props.playSpecificAudio(props.index + 1)}
      updateElapsedTime={props.updateElapsedTime}
      changeLoadingStatus={props.changeLoadingStatus}
    />
  </div>
);

export default Player;

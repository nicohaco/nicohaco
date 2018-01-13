// @flow

import React from 'react';
import Slider from 'rc-slider';
import { Icon as Button } from '../../atoms/Button';
import styles from './style.css';

type Props = {
  status: boolean;
  volume: number;
  disabled: boolean;
  playPrev: () => {};
  playNext: () => {};
  putLoading: (boolean) => {};
  changeVolume: () => {};
  toggleStatus: () => {};
};

const buttonSize = '2rem';

const AudioController = (props: Props) => (
  <div className={styles.container}>
    <Button
      icon="left-open-mini"
      size={buttonSize}
      onClick={props.playPrev}
      disabled={props.disabled}
      className={styles.button}
    />
    <Button
      icon={!props.status ? 'play' : 'pause'}
      size={buttonSize}
      onClick={() => props.toggleStatus(!props.status)}
      disabled={props.disabled}
    />
    <Button
      icon="right-open-mini"
      size={buttonSize}
      onClick={props.playNext}
      disabled={props.disabled}
      className={styles.button}
    />
    <Slider
      value={props.volume * 100}
      onChange={(e) => props.changeVolume(e / 100)}
    />
  </div>
);

export default AudioController;

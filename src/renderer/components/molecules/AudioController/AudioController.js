// @flow

import React from 'react';
import Slider from 'rc-slider';
import { Icon as Button } from '../../atoms/Button';
import styles from './style.css';

import type { Props } from '../../../containers/Player/AudioController';

const buttonSize = '2rem';

const AudioController = (props: Props) => (
  <div className={styles.container}>
    <Button
      icon="left-open-mini"
      size={buttonSize}
      onClick={() => props.playSpecificAudio(props.index - 1)}
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
      onClick={() => props.playSpecificAudio(props.index + 1)}
      disabled={props.disabled}
      className={styles.button}
    />
    <Slider
      value={props.volume * 100}
      style={{ width: 100 }}
      onChange={(e) => props.changeVolume(e / 100)}
      className={styles.slider}
    />
  </div>
);

export default AudioController;

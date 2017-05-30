// @flow

import React from 'react';
import cx from 'classnames';
import Slider from 'react-slider';
import Loading from 'react-loading';
import Image from '../../atoms/Image';
import LoopButton from '../LoopButton';
import { formatTime } from '../../../utils/format';
import styles from './style.css';

type Props = {
  loop: 'none' | 'one' | 'all';
  title: string;
  loading: boolean;
  disabled: boolean;
  totalTime: number;
  className: string;
  toggleLoop: ('none' | 'one' | 'all') => {};
  elapsedTime: number;
  thumbnailUrl: string;
  toggleStatus: () => {};
  updateElapsedTime: () => {};
};

const AudioInfo = (props: Props) => (
  <div className={cx(styles.container, props.className)}>
    <div className={styles.thumbnail}>
      {
        props.thumbnailUrl ? (
          <div className={styles.thumbnailBox}>
            <div
              style={{ opacity: props.displayedLoader ? 0 : 1 }}
              className={styles.loading}
            >
              <Loading
                type="bars"
                color="#fff"
                width="30"
                height="30"
              />
            </div>
            <Image src={props.thumbnailUrl} />
          </div>
        ) : null
      }
    </div>
    <div className={styles.mainBox}>
      <div className={styles.mainBoxTop}>
        {
          !props.disabled ? (
            <LoopButton
              loop={props.loop}
              onClick={props.toggleLoop}
              className={styles.loopButton}
            />
          ) : null
        }
        <span className={`${styles.time} ${styles.left}`}>
          {props.disabled ? '' : formatTime(props.elapsedTime)}
        </span>
        <span className={styles.title}>{props.title}</span>
        <span className={`${styles.time} ${styles.right}`}>
          {props.disabled ? '' : formatTime(props.totalTime)}
        </span>
      </div>
      <div className={styles.mainBoxBottom}>
        <Slider
          max={10000}
          withBars
          disabled={props.disabled}
          value={((props.elapsedTime / props.totalTime) * 10000) || 0}
          className={styles.slider}
          onChange={(e) =>
            props.updateElapsedTime(props.totalTime * (e / 10000))
          }
          onBeforeChange={() => props.toggleStatus(false)}
          onAfterChange={() => props.toggleStatus()}
        />
      </div>
    </div>
  </div>
);

export default AudioInfo;

// @flow

import React from 'react';
import cx from 'classnames';
import Slider from 'rc-slider';
import Loading from 'react-loading';
import Image from '../../atoms/Image'; import LoopButton from '../LoopButton';
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
              width="50%"
              height="70%"
            />
          </div>
          <Image src={props.thumbnailUrl} />
        </div>
      ) : null
    }
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
        {
          !props.disabled ? (
            <Slider
              max={10000}
              value={((props.elapsedTime / props.totalTime) * 10000) || 0}
              onChange={(e) =>
                props.updateElapsedTime(props.totalTime * (e / 10000))
              }
              className={styles.slider}
              onBeforeChange={() => props.toggleStatus(false)}
              onAfterChange={() => props.toggleStatus()}
            />
          ) : null
        }
      </div>
    </div>
  </div>
);

export default AudioInfo;

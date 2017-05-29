// @flow

import React from 'react';
import cx from 'classnames';
import photon from '../../../styles/photon';
import styles from './style.css';

type Props = {
  icon: string;
  size?: string;
  className?: string;
};

const ButtonIcon = (props: Props) => (
  <button
    {...props}
    className={cx(styles.container, props.className)}
  >
    <span
      className={cx(photon['icon'], photon[`icon-${props.icon}`])}
      style={{
        fontSize: props.size ? props.size : '1rem'
      }}
    />
  </button>
);

export default ButtonIcon;

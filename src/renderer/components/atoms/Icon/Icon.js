// @flow

import React from 'react';
import cx from 'classnames';
import photon from '../../../styles/photon';

type Props = {
  icon: string;
  size?: string;
};

const Icon = (props: Props) => (
  <span
    className={cx(photon['icon'], photon[`icon-${props.icon}`])}
    style={{
      fontSize: props.size ? props.size : '1rem'
    }}
  />
);

export default Icon;

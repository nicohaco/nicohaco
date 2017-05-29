// @flow

import React from 'react';
import cx from 'classnames';
import photon from '../../../styles/photon';

type Props = {
  icon: string;
};

const ButtonIcon = (props: Props) => (
  <button
    {...props}
    className={cx(photon['btn'], photon['btn-default'])}
  >
    <span className={cx(photon['icon'], photon[`icon-${props.icon}`])} />
  </button>
);

export default ButtonIcon;

// @flow

import React from 'react';
import cx from 'classnames';
import photon from '../../../styles/photon';

type Props = {
  src: string;
  width: number;
  height: number;
  className: string;
};

const Circle = (props: Props) => (
  <img
    src={props.src || ''}
    width={props.width}
    height={props.height}
    className={cx(photon['img-circle'], props.className)}
  />
);

export default Circle;

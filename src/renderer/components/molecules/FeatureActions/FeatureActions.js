// @flow

import React from 'react';
import { Action as Button } from '../../atoms/Button';
import photon from '../../../styles/photon';

type Props = {
  pushPage: (string) => {};
};

// [TODO] hmmm... can't use Link from react-router-dom..
const FeatureActions = (props: Props) => (
  <div className={photon['toolbar-actions']}>
    <div className={photon['btn-group']}>
      <Button
        icon="home"
        onClick={() => props.pushPage('mylist')}
      />
      <Button
        icon="search"
        onClick={() => props.pushPage('search')}
      />
      <Button
        icon="trophy"
        onClick={() => props.pushPage('ranking')}
      />
    </div>
  </div>
);

export default FeatureActions;

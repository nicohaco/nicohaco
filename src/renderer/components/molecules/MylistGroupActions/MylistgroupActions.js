// @flow

import React from 'react';
import photon from '../../../styles/photon';
import { Action as Button } from '../../atoms/Button';

type Props = {
  create: () => {};
  reload: () => {};
  goToSite: () => {};
};

const MylistgroupActions = (props: Props) => (
  <div className={photon['toolbar-actions']}>
    <div className={photon['btn-group']}>
      <Button
        icon="plus"
        onClick={props.create}
      />
      <Button
        icon="arrows-ccw"
        onClick={props.reload}
      />
      <Button
        icon="link"
        onClick={props.goToSite}
      />
    </div>
  </div>
);

export default MylistgroupActions;

// @flow

import React from 'react';
import SideMenu from '../../../containers/SideMenu';
import styles from './style.css';

type Props = {
  hasMainBoxPadding: boolean;
  children: React$Node;
};

const MainContainer = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <SideMenu />
    </div>
    <div
      className={styles.right}
      style={{ padding: props.hasMainBoxPadding ? 20 : 0 }}
    >
      {props.children}
    </div>
  </div>
);

MainContainer.defaultProps = {
  hasMainBoxPadding: true
};

export default MainContainer;

// @flow

import React from 'react';
import cx from 'classnames';
import Player from '../../../containers/Player/Player';
import Toolbar from '../../../containers/Header/Toolbar';
import User from '../../../containers/Header/User';
import photon from '../../../styles/photon';
import styles from './header.style.css';

const Header = () => (
  <header>
    <div
      className={cx(photon.toolbar, photon['toolbar-header'], styles.container)}
    >
      <div className={styles.player}>
        <Player />
      </div>
      <div className={styles.user}>
        <User />
      </div>
    </div>
    <div className={styles.sub}>
      <Toolbar />
    </div>
  </header>
);

export default Header;

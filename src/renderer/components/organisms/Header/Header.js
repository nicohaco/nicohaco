// @flow

import React from 'react';
import cx from 'classnames';
import SubWindow from '../../../containers/Header/SubWindow';
import Audio from '../../../containers/Player/Audio';
import AudioInfo from '../../../containers/Player/AudioInfo';
import AudioController from '../../../containers/Player/AudioController';
import Toolbar from '../../../containers/Header/Toolbar';
import photon from '../../../styles/photon';
import styles from './header.style.css';

import SearchBox from '../../../containers/Search/SearchBox';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={cx(photon.toolbar, photon['toolbar-header'], styles.container)}>
      <div className={styles.main}>
        <div className={styles.left}>
          <AudioController />
        </div>
        <div className={styles.center}>
          <AudioInfo />
        </div>
        <div className={styles.right}>
          <SubWindow size="1.4rem" />
          <SearchBox />
        </div>
        <Audio />
      </div>
      <div className={styles.sub}>
        <Toolbar />
      </div>
    </div>
  </header>
);

export default Header;

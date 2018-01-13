// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  path: string;
  pushPage: (string) => {};
};

const FeatureActions = (props: Props) => (
  <div className={styles.container}>
    <span
      onClick={() => props.pushPage('mylist')}
      className={props.path === '/mylist' ? styles.active : undefined}
    >
      マイリスト
    </span>
    <span
      onClick={() => props.pushPage('search')}
      className={props.path === '/search' ? styles.active : undefined}
    >
      検索
    </span>
    <span
      onClick={() => props.pushPage('ranking')}
      className={props.path === '/ranking' ? styles.active : undefined}
    >
      ランキング
    </span>
  </div>
);

export default FeatureActions;

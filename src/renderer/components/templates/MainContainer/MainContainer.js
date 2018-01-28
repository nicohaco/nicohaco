// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  hasMainBoxPadding: boolean;
  children: React$Node;
};

const MainContainer = (props: Props) => (
  <div
    style={{ padding: props.hasMainBoxPadding ? 20 : 0 }}
    className={styles.container}
  >
    {
      props.children
    }
  </div>
);

MainContainer.defaultProps = {
  hasMainBoxPadding: true
};

export default MainContainer;

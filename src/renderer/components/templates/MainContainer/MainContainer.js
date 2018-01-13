// @flow

import React from 'react';
import Loader from 'react-loading';
import styles from './style.css';

type Props = {
  left: React.Component<*>;
  right: React.Component<*>;
  children: React.Component<*>;
};

const MainContainer = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.left}>{props.left}</div>
    {props.children}
    <div className={styles.right}>
      {
        /*
        <div className={styles.loader}>
          <Loader
            type="bars"
            height="50px"
            width="50px"
            />
        </div>
         */
      }
      {props.right}
    </div>
  </div>
);

export default MainContainer;

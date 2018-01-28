// @flow

import React from 'react';
import Header from './organisms/Header';
import SideMenu from '../containers/SideMenu';
import VideoPlayer from '../containers/Player/Video'; // TODO: delete
import { history } from '../store/configureStore';
import styles from '../styles/app.css';

type Props = {
  children?: React.Component<*>;
};

const App = (props: Props) => {
  const path = history.location.pathname;

  return (
    <div>
      {
        path !== '/login' && path !== '/' ? (
          <Header />
        ) : null
      }
      <div className={styles.container}>
        {
          path !== '/login' && path !== '/' ? (
            <div className={styles.left}>
              <SideMenu />
            </div>
          ) : null
        }
        {
          props.children
        }
        <VideoPlayer />
      </div>
    </div>
  );
};

export default App;

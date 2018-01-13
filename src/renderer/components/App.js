// @flow

import React from 'react';
import Header from './organisms/Header';
import VideoPlayer from '../containers/Player/Video'; // TODO: delete
import { history } from '../store/configureStore';
import styles from '../styles/app.css';

type Props = {
  children?: React.Component<*>;
};

const App = (props: Props) => (
  <div>
    {
      history.location.pathname !== '/login' ? (
        <Header />
      ) : null
    }
    <div className={styles.container}>
      <VideoPlayer />
      {
        props.children
      }
    </div>
  </div>
);

export default App;

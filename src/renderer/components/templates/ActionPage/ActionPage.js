// @flow

import React from 'react';
import MainContainer from '../MainContainer';
import styles from './style.css';

class ActionPage extends React.Component {
  constructor() {
    super();

    this.state = { bg: 'none' };
  }

  render() {
    const {
      toolbar,
      children
    } = this.props;

    return (
      <MainContainer>
        <div className={styles.toolbar}>
          {
            toolbar
          }
        </div>
        <div className={styles.main}>
          {
            children
          }
        </div>
      </MainContainer>
    );
  }
}

export default ActionPage;

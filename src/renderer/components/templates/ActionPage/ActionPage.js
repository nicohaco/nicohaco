// @flow

import React from 'react';
import MainContainer from '../MainContainer';
import styles from './style.css';

type Props = {
  toolbar: React$Node;
  children: React$Node;
};

type State = {
  bg: string;
};

class ActionPage extends React.PureComponent<Props, State> {
  state: State;

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
        <div className={styles.container}>
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
        </div>
      </MainContainer>
    );
  }
}

export default ActionPage;

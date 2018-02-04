// @flow

import React from 'react';
import Container from '../../ItemGrid';
import styles from './style.css';

import type { Props } from '../../../../containers/Mylist/GridList';

class ItemGrid extends React.PureComponent<Props, void> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.id !== nextProps.id) {
      this.props.setup(nextProps.id);
    }
  }

  render() {
    const {
      me,
      play,
      list,
      actionMylist
    } = this.props;

    return (
      <div className={styles.container}>
        <Container
          list={list}
          play={play}
          actionIcon={me ? 'trash' : 'add'}
          actionMylist={actionMylist}
        />
      </div>
    );
  }
}

export default ItemGrid;

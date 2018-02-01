// @flow

import React from 'react';
import Container from '../../ItemGrid';
import styles from './style.css';

import type { Props } from '../../../../containers/Mylist/GridList';

class ItemGrid extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.loadMylist(this.props.id);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.id !== nextProps.id) {
      this.props.loadMylist(nextProps.id);
    }
  }

  render() {
    const {
      id,
      me,
      play,
      list,
      actionMylist
    } = this.props;

    return (
      <div className={styles.container}>
        <Container
          actionIcon={me ? 'trash' : 'add'}
          list={list}
          play={play}
          actionMylist={actionMylist}
        />
      </div>
    );
  }
}

export default ItemGrid;

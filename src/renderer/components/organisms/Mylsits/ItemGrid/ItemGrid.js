// @flow

import React from 'react';
import Container from '../../ItemGrid';
import styles from './style.css';

class ItemGrid extends React.PureComponent {
  componentWillMount() {
    this.props.fetchMylist(this.props.id);
  }

  componentwillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      console.log(nextProps.id);
    // this.props.fetchUserVideos(this.props.id);
    }
  }

  render() {
    const {
      id,
      play,
      list,
      actionMylist
    } = this.props;

    return (
      <div className={styles.container}>
        <Container
          actionIcon="trash"
          list={list}
          play={play}
          actionMylist={actionMylist}
        />
      </div>
    );
  }
}

export default ItemGrid;

import React from 'react';
import Container from '../../ItemGrid';
import styles from './style.css';

class ItemGrid extends React.Component {
  componentWillMount() {
    this.props.fetchUserVideos(this.props.id);
  }

  render() {
    const {
      play,
      videos,
      actionMylist
    } = this.props;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Videos</h2>
        <Container
          list={videos}
          play={play}
          actionIcon="add"
          actionMylist={actionMylist}
        />
      </div>
    );
  }
}

export default ItemGrid;

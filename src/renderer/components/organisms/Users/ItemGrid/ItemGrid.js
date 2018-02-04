import React from 'react';
import Container from '../../ItemGrid';
import styles from './style.css';

const ItemGrid = (props) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Videos</h2>
    <Container
      list={props.videos}
      play={props.play}
      actionIcon="add"
      actionMylist={props.actionMylist}
    />
  </div>
);

export default ItemGrid;

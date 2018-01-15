import React from 'react';
import styles from './style.css';

const Text = (props) => (
  <div className={styles.container}>
    <p className={styles.title}>{props.title}</p>
    <span className={styles.text}>{props.text}</span>
  </div>
);

export default Text;

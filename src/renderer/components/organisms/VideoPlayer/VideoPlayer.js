import React from 'react';
import Modal from '../../molecules/Modal';
import styles from './style.css';

const VideoPlayer = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <span>close</span>
    </header>
    <webview
      src="http://embed.nicovideo.jp/watch/sm9"
      className={styles.webview}
    />
  </section>
);

export default VideoPlayer;

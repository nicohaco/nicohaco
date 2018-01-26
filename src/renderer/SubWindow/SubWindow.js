// @flow

import React from 'react';
import { ipcRenderer } from 'electron';
import styles from './style.css';

type State = {
  title: string;
  videoId: string;
};

class SubWindow extends React.PureComponent<void, State> {
  state: State;

  constructor() {
    super();

    this.state = {
      title: '',
      videoId: ''
    };
  }

  componentDidMount() {
    ipcRenderer.on('addVideo', (e, c) => {
      this.setState({
        title: c.title,
        videoId: c.videoId
      });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {
          this.state.videoId !== '' ? (
            <webview
              src={`http://embed.nicovideo.jp/watch/${this.state.videoId}`}
              className={styles.webview}
            />
          ) : (
            <div className={styles.none} />
          )
        }
      </div>
    );
  }
}

export default SubWindow;

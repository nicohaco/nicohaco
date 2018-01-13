import React from 'react';
import cx from 'classnames';
import Icon from '../../atoms/Icon';
import styles from './style.css';

type Props = {
  id: string;
  close: () => void;
  opened: boolean;
};

class VideoPlayer extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isSmall: false
    };
  }

  changeSize = () => {
    this.setState({ isSmall: !this.state.isSmall })
  }

  render() {
    const {
      id,
      close,
      opened
    } = this.props;

    if (!opened) return null;

    return (
      <section
        className={cx(styles.container, this.state.isSmall ? styles.small : undefined)}
      >
        <header className={styles.header}>
          <div className={styles.toolbox}>
            <span onClick={close}>
              <Icon
                icon="cancel"
                size="1.5rem"
              />
            </span>
            <span onClick={this.changeSize}>
              <Icon
                icon="popup"
                size="1.1rem"
              />
            </span>
          </div>
        </header>
        <webview
          src={`http://embed.nicovideo.jp/watch/${id}`}
          className={styles.webview}
        />
      </section>
    );
  }
}

export default VideoPlayer;

// @flow

import React from 'react';
import ShowPageBox from '../../../molecules/ShowPageBox';
import ItemBox from '../../../molecules/ItemBox';
import styles from './style.css';

class History extends React.PureComponent {
  componentWillMount() {
    this.props.fetchMyHistory();
  }

  render() {
    const {
      play,
      history
    } = this.props;

    const list = history.map((item) => ({
      ...item,
      videoId: item.videoId.replace('watch/', '')
    }));

    return (
      <ShowPageBox
        items={
          list.map((item, i) => (
            <ItemBox
              key={item.videoId}
              img={item.thumbnailUrl}
              title={item.title}
              actions={[]}
              watchId={item.videoId}
              onClick={(type) => play(type, 0, [list[i]])}
              commentCount={item.commentCount}
              postedDate={item.postedDate}
              totalTime={item.totalTime}
            >
              <div className={styles.watchInfo}>
                {item.watchedDate} - {item.watchedCount}回
              </div>
            </ItemBox>
          ))
        }
        title="History"
        limitNum="15"
        className={styles.container}
        ulClassName={styles.ul}
      />
    );
  }
}

export default History;

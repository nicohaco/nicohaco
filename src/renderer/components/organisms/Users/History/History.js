// @flow

import React from 'react';
import ShowPageBox from '../../../molecules/ShowPageBox';
import ItemBox from '../../../molecules/ItemBox';
import styles from './style.css';

import type { Props } from '../../../../containers/Users/History';

const History = (props: Props) => {
  const list = props.history.map((item) => ({
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
            onClick={(type) => props.play(type, 0, [list[i]])}
            viewCount={item.viewCount}
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
};

export default History;

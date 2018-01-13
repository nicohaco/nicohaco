// @flow

import React from 'react';
import { formatTime } from '../../../utils/format';
import ItemBox from '../../molecules/ItemBox';
import styles from './style.css';

import type { MylistArray } from '../../../types/states/mylist';

type Props = {
  list: MylistArray;
  play: ('music' | 'video', number, MylistArray) => {};
  actionIcon: 'add' | 'delete';
  actionMylist: () => {};
};

const ItemGrid = (props: Props) => (
  <div className={styles.container}>
    {
      props.list.map((item, i) => (
        <ItemBox
          key={`${i}_${item.watchIda}`}
          img={item.videoId.match(/^so/) ? item.thumbnailUrl : `${item.thumbnailUrl}.M`}
          title={item.title}
          actions={[
            {
              icon   : props.actionIcon, // add or delete
              onClick: (e) => {
                e.stopPropagation();
                props.actionMylist(item);
              }
            }
          ]}
          watchId={item.watchId || item.contentId}
          onClick={(type) => props.play(type, i, props.list)}
          viewCount={item.viewCounter}
          commentCount={item.commentCounter}
          totalTime={
            item.lengthSeconds ? (
              item.lengthSeconds.includes(':') ?
                item.lengthSeconds.padStart(5, '0') : // for ranking
                formatTime(parseInt(item.lengthSeconds))
            ) : null
          }
        />
      ))
    }
  </div>
);

export default ItemGrid;

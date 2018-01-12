// @flow

import React from 'react';
import { formatTime } from '../../../utils/format';
import ItemBox from '../../molecules/ItemBox';
import styles from './style.css';

import type { MylistArray } from '../../../types/states/mylist';

type Props = {
  list: MylistArray;
  play: (number, MylistArray) => {};
  actionIcon: 'add' | 'delete';
  actionMylist: () => {};
};

const ItemGrid = (props: Props) => (
  <div className={styles.container}>
    {
      props.list.map((item, i) => (
        <ItemBox
          key={item.watchId || item.contentId}
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

            // {
            //   icon   : 'newspaper', // details
            //   onClick: (e) => {
            //     e.stopPropagation();
            //   }
            // }
          ]}
          watchId={item.watchId || item.contentId}
          onClick={() => props.play(i, props.list)}
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

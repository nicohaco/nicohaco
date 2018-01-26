// @flow

import React from 'react';
import AddIcon from 'react-icons/lib/md/add';
import DeleteIcon from 'react-icons/lib/md/delete';
import { formatTime } from '../../../utils/format';
import ItemBox from '../../molecules/ItemBox';
import styles from './style.css';

import type { Props } from '../../../containers/Mylist/GridList';

const ItemGrid = (props: Props) => (
  <div className={styles.container}>
    {
      props.list.map((item, i) => (
        <ItemBox
          key={`${i}_${item.videoId}`}
          img={item.videoId.match(/^so/) ? item.thumbnailUrl : `${item.thumbnailUrl}.M`}
          title={item.title}
          actions={[
            props.actionIcon === 'add' ? (
              <AddIcon
                onClick={(e) => {
                  e.stopPropagation();
                  props.actionMylist(item);
                }}
              />
            ) : (
              <DeleteIcon
                onClick={(e) => {
                  e.stopPropagation();
                  props.actionMylist(item);
                }}
              />
            )
          ]}
          watchId={item.videoId}
          onClick={(type) => props.play(type, i, props.list)}
          viewCount={item.viewCount}
          commentCount={item.commentCount}
          postedDate={item.postedDate}
          totalTime={
            item.totalTime ? (
              item.totalTime.includes(':') ?
                item.totalTime.padStart(5, '0') : // for ranking
                formatTime(parseInt(item.totalTime))
            ) : null
          }
        />
      ))
    }
  </div>
);

export default ItemGrid;

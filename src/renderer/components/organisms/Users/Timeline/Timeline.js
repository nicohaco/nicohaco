import React from 'react';
import { formatDateOfISO8601 } from '../../../../utils/format';
import TimelineItem from '../../../molecules/TimelineItem';
import styles from './style.css';

class Timeline extends React.PureComponent {
  componentDidMount() {
    this.props.fetchMyTimeline();
  }

  render() {
    const {
      play,
      timeline
    } = this.props;

    const items = timeline.filter((t) => t.topic === 'nicovideo.user.video.upload');

    // senderNiconicoUser.nickname
    // senderNiconicoUser.id
    // video.id
    // video.videoWatchPageId
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Timeline</h2>
        {
          items.map((item) => (
            <TimelineItem
              id={item.id}
              action="Uploaded"
              title={item.video.title}
              onClick={(type) => play(type, 0, item.video)}
              videoImg={item.video.thumbnailUrl.normal}
              createdAt={formatDateOfISO8601(item.createdAt)}
              creatorImg={item.senderNiconicoUser.icons.tags.defaultValue.urls.s50x50}
              creatorName={item.senderNiconicoUser.nickname}
            />
          ))
        }
      </div>
    );
  }
}

export default Timeline;

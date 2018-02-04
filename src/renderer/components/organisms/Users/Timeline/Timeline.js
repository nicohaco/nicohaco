// @flow

import React from 'react';
import ShowPageBox from '../../../molecules/ShowPageBox';
import { formatDateOfISO8601 } from '../../../../utils/format';
import TimelineItem from '../../../molecules/TimelineItem';

import type { Props } from '../../../../containers/Users/Timeline';

class Timeline extends React.PureComponent<Props, void> {
  componentDidMount() {
    if (this.props.id === 'me') this.props.fetchMyTimeline();
    else this.props.fetchUserTimeline(this.props.id);
  }

  render() {
    const {
      play,
      timeline
    } = this.props;

    const items = timeline.filter((t) => t.topic === 'nicovideo.user.video.upload');

    return (
      <ShowPageBox
        title="Timeline"
        items={
          items.map((item) => (
            <li key={item.id}>
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
            </li>
          ))
        }
      />
    );
  }
}

export default Timeline;

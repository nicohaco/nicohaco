// @flow

import React from 'react';
import { shell } from 'electron';
import { formatDate } from '../../../utils/format';
import ShowPage from '../../templates/ShowPage';
import GridList from '../../../containers/Mylist/GridList';

import type { Props } from '../../../containers/Mylist/Mylist';

class Mylist extends React.PureComponent<Props, void> {
  // componentWillMount() {
  //   if (Object.keys(this.props.group).length === 0) {
  //   }
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.pathname !== nextProps.pathname) {
  //     if (Object.keys(nextProps.group).length === 0) {
  //     }
  //   }
  // }

  render() {
    const {
      id,
      list,
      play,
      group,
      pathname
    } = this.props;

    if (group && Object.keys(group).length === 0) return null;

    return (
      <ShowPage
        title={group.name || group.title}
        pathname={pathname}
        thumbnailUrl={group.img || group.thumbnailUrls}
        buttons={[
          {
            title: 'SITE',
            onClick: () => shell.openExternal(`http://www.nicovideo.jp/my/mylist/#/${id}`)
          },
          {
            title: 'PLAY',
            onClick: () => play('music', 0, list)
          }
        ]}
        info={[
          group.updateTime ? (
            {
              title: 'UpdatedAt',
              text: formatDate(group.updateTime * 1000)
            }
          ) : undefined,
          {
            title: 'TotalVideos',
            text: group.totalVideos
          },
          {
            title: 'TotalTime',
            text: group.totalTime
          }
        ]}
      >
        <GridList />
      </ShowPage>
    );
  }
}

export default Mylist;

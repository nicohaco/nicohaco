// @flow

import React from 'react';
import { formatDate } from '../../../utils/format';
import ShowPage from '../../templates/ShowPage';
import GridList from '../../../containers/Mylist/GridList';

const Mylist = (props) =>(
  <ShowPage
    title={props.group.name}
    pathname={props.pathname}
    thumbnailUrl={props.group.img}
    buttons={[
      {
        title: 'PLAY',
        onClick: () => props.play('music', 0, props.list)
      }
    ]}
    info={[
      {
        title: 'UpdatedAt',
        text: formatDate(props.group.updateTime * 1000)
      },
      {
        title: 'TotalVideos',
        text: props.group.totalVideos
      },
      {
        title: 'TotalTime',
        text: props.group.totalTime
      }
    ]}
  >
    <GridList />
  </ShowPage>
);

export default Mylist;

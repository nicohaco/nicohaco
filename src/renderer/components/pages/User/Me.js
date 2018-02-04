// @flow

import React from 'react';
import { shell } from 'electron';
import ShowPage from '../../templates/ShowPage';
import Timeline from '../../../containers/Users/Timeline';
import Following from '../../../containers/Users/Following';
import History from '../../../containers/Users/History';
import styles from './style.css';

import type { Props } from '../../../containers/Users/Me';

const Users = (props: Props) => (
  <ShowPage
    title={props.title}
    thumbnailUrl={props.thumbnailUrl}
    buttons={[
      {
        title  : 'SITE',
        onClick: () => shell.openExternal('http://www.nicovideo.jp/my')
      },
      {
        title  : 'LOGOUT',
        onClick: props.logout
      }
    ]}
    info={[
      {
        title: 'Id',
        text : props.id
      }
    ]}
  >
    <div className={styles.container}>
      <Timeline />
      <Following />
    </div>
    <History />
  </ShowPage>
);

export default Users;

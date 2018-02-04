// @flow

import React from 'react';
import { shell } from 'electron';
import ShowPage from '../../templates/ShowPage';
import Timeline from '../../../containers/Users/Timeline';
import Mylists from '../../../containers/Users/Mylists';
import ItemGrid from '../../../containers/Users/ItemGrid';
import Modal from '../../../containers/Modal/AddMylist';
import styles from './style.css';

import type { Props } from '../../../containers/Users/User';

const User = (props: Props) => (
  <ShowPage
    title={props.title}
    thumbnailUrl={props.thumbnailUrl}
    buttons={[
      {
        title  : 'SITE',
        onClick: () => shell.openExternal(`http://www.nicovideo.jp/user/${props.id}`)
      }
    ]}
    info={[
      {
        title: 'Id',
        text : props.id
      },
      {
        title: 'Followers',
        text : props.followers
      }
    ]}
  >
    <div className={styles.container}>
      <Timeline />
      <Mylists />
    </div>
    <ItemGrid />
    <Modal />
  </ShowPage>
);

export default User;

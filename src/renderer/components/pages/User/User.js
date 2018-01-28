// @flow

import React from 'react';
import { shell } from 'electron';
import ShowPage from '../../templates/ShowPage';
import Timeline from '../../../containers/Users/Timeline';
import Mylists from '../../../containers/Users/Mylists';
import ItemGrid from '../../../containers/Users/ItemGrid';
import styles from './style.css';

import type { Props } from '../../../containers/Users/Me';

class User extends React.PureComponent {
  componentWillMount() {
    this.props.fetchUserData(this.props.id);
  }

  render() {
    const {
      id,
      title,
      followers,
      thumbnailUrl
    } = this.props;

    return (
      <ShowPage
        title={title}
        thumbnailUrl={thumbnailUrl}
        buttons={[
          {
            title: 'SITE',
            onClick: () => shell.openExternal(`http://www.nicovideo.jp/user/${id}`)
          }
        ]}
        info={[
          {
            title: 'Id',
            text: id
          },
          {
            title: 'Followers',
            text: followers
          }
        ]}
      >
        <div className={styles.container}>
          <Timeline />
          <Mylists />
        </div>
        <ItemGrid />
      </ShowPage>
    );
  }
}

export default User;

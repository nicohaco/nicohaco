// @flow

import React from 'react';
import styles from './style.css';

import type { Props } from '../../../../containers/Users/Following';

const Following = (props: Props) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Following</h2>
    <ul className={styles.ul}>
      {
        props.following.map((user) => (
          <li
            id={user.id}
            key={user.id}
            onClick={() => props.goToUserPage(user.id)}
          >
            <img src={user.thumbnailUrl} />
            {user.name}
          </li>
        ))
      }
    </ul>
  </div>
);

export default Following;

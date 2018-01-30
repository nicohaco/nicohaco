// @flow

import React from 'react';
import styles from './style.css';

import type { Props } from '../../../../containers/Users/Following';

class Followers extends React.PureComponent<Props, void> {
  componentDidMount() {
    this.props.fetchMyFollowing();
  }

  render() {
    const {
      following,
      goToUserPage
    } = this.props;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Following</h2>
        <ul className={styles.ul}>
          {
            following.map((user) => (
              <li
                id={user.id}
                onClick={() => goToUserPage(user.id)}
              >
                <img src={user.thumbnailUrl} />
                {user.name}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Followers;

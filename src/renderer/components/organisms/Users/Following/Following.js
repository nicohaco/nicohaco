import React from 'react';
import styles from './style.css';

class Followers extends React.Component {
  componentDidMount() {
    this.props.fetchMyFollowing();
  }

  render() {
    const {
      following
    } = this.props;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Following</h2>
        <ul className={styles.ul}>
          {
            following.map((user) => (
              <li>
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

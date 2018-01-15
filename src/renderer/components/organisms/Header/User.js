// @flow

import React from 'react';
import List from '../../atoms/List';
import UserBox from '../../molecules/UserBox';
import styles from './user.style.css';

type Props = {
  id: string;
  name: string;
  logout: () => {};
  deleteDB: () => {};
  thumbnailUrl: string;
  deleteHistory: () => {};
};

type State = {
  openedPopup: boolean;
};

class User extends React.PureComponent<Props, State> {
  state: State;
  onClick: () => {}; // eslint-disable-line

  constructor() {
    super();

    this.state = {
      openedPopup: false
    };
  }

  onClick() {
    this.setState({ openedPopup: !this.state.openedPopup });
  }

  componentDidMount() {

    // [TODO] I cannot understand fot this issue...
    // [ERROR] setState(...): Can only update a mounted or mounting component.
    // This usually means you called setState() on an unmounted component.
    // This is a no-op. Please check the code for the User component.
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const {
      name,
      logout,
      deleteDB,
      thumbnailUrl,
      deleteHistory
    } = this.props;

    return (
      <div
        onClick={this.onClick}
        className={styles.container}
      >
        <UserBox
          name={name}
          thumbnailUrl={thumbnailUrl}
        />
        {
          this.state.openedPopup ? (
            <div className={styles.popup}>
              <List
                items={[
                  {
                    key    : 'logout',
                    title  : 'ログアウト',
                    onClick: (e) => {
                      e.stopPropagation();
                      logout();
                      this.setState({ openedPopup: false });
                    },
                    textAlign: 'center'
                  },
                  {
                    key    : 'history',
                    title  : '検索履歴を消す',
                    onClick: (e) => {
                      e.stopPropagation();
                      deleteHistory();
                    },
                    textAlign: 'center'
                  },
                  {
                    key    : 'db',
                    title  : 'DBを初期化する',
                    onClick: (e) => {
                      e.stopPropagation();
                      deleteDB();
                      this.setState({ openedPopup: false });
                    },
                    textAlign: 'center'
                  }
                ]}
              />
            </div>
          ) : null
        }
        {
          this.state.openedPopup ? (
            <div
              onClick={this.onClick}
              className={styles.overlay}
            />
          ) : null
        }
      </div>
    );
  }
}

export default User;

// @flow

import React from 'react';
import cx from 'classnames';
import MyIcon from 'react-icons/lib/md/account-circle';
import AddIcon from 'react-icons/lib/md/add-circle-outline';
import SearchIcon from 'react-icons/lib/md/search';
import ReloadIcon from 'react-icons/lib/md/autorenew';
import TimelineIcon from 'react-icons/lib/md/timeline';
import styles from './style.css';

// TODO delete
import CreateMylistModal from '../Modal/Input';

class SideMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      openedCreateMylistModal: false
    };
  }

  componentDidMount() {
    this.props.setup();
  }

  render() {
    const {
      group,
      reload,
      pushPage,
      pathname,
      createMylist,
      selectMylist
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>MAIN</h1>
          <p
            onClick={() => pushPage('/users/me')}
            className={pathname.includes('/users/me') ? styles.active : undefined}
          >
            <MyIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            My Page
          </p>
          <p
            onClick={() => pushPage('/search')}
            className={pathname.includes('/search') ? styles.active : undefined}
          >
            <SearchIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Search
          </p>
          <p
            onClick={() => pushPage('/ranking/all')}
            className={pathname.includes('/ranking') ? styles.active : undefined}
          >
            <TimelineIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Ranking
          </p>
        </div>
        <div className={styles.mylist}>
          <h1 className={styles.title}>MYLISTS</h1>
          <ul className={styles.mylistItems}>
            {
              group.map((item) => (
                <li
                  onClick={() => selectMylist(item.id)}
                  className={cx(
                    styles.mylistItem,
                    pathname.includes(`/mylist/${item.id}`) ? styles.active : undefined
                  )}
                >
                  {item.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.mylistController}>
          <p onClick={() => this.setState({ openedCreateMylistModal: true })}>
            <AddIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Create Mylist
          </p>
          <p onClick={reload}>
            <ReloadIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Update Mylist
          </p>
        </div>
        {/* TODO: delete */}
        <CreateMylistModal
          opened={this.state.openedCreateMylistModal}
          title="マイリスト作成"
          onClick={(name) => {
            createMylist(name);
            this.setState({ openedCreateMylistModal: false });
          }}
          closeModal={() => this.setState({ openedCreateMylistModal: false })}
          buttonLabel="作成"
        />
      </div>
    );
  }
}

export default SideMenu;

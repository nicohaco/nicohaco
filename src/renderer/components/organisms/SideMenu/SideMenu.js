// @flow

import React from 'react';
import cx from 'classnames';
import CreateMylistModal from '../Modal/Input'; // TODO delete
import MyIcon from 'react-icons/lib/md/account-circle';
import AddIcon from 'react-icons/lib/md/add-circle-outline';
import ReloadIcon from 'react-icons/lib/md/autorenew';
import TimelineIcon from 'react-icons/lib/md/timeline';
import styles from './style.css';

import type {Props} from '../../../containers/SideMenu';

type State = {
  openedCreateMylistModal: boolean;
};

const Item = (props) => (
  <p
    onClick={props.onClick}
    className={
      cx(styles.item, props.pathname.includes(props.myPath) ? styles.active : undefined)
    }
  >
    {
      props.children
    }
  </p>
);

Item.defaultProps = {
  pathname: ''
};

class SideMenu extends React.PureComponent<Props, State> {
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
          <Item
            onClick={() => pushPage('/users/me')}
            pathname={pathname}
            myPath="/users/me"
          >
            <MyIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            My Page
          </Item>
          <Item
            onClick={() => pushPage('/ranking/all')}
            pathname={pathname}
            myPath="/ranking/all"
          >
            <TimelineIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Ranking
          </Item>
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
          <Item onClick={() => this.setState({ openedCreateMylistModal: true })}>
            <AddIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Create Mylist
          </Item>
          <Item onClick={reload}>
            <ReloadIcon
              size="1.5rem"
              style={{
                marginRight: 5
              }}
            />
            Update Mylist
          </Item>
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

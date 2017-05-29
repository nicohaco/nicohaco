// @flow

import { shell } from 'electron';
import React from 'react';
import cx from 'classnames';
import Item from '../../../molecules/GroupListItem';
import Actions from '../../../molecules/MylistGroupActions';
import CreateMylistModal from '../../Modal/Input';
import photon from '../../../../styles/photon';
import styles from './style.css';

import type { GroupArray } from '../../../../types/states/mylist';

type Props = {
  ready: boolean;
  group: GroupArray;
  reload: () => {};
  createMylist: () => {};
  selectMylist: (string) => {};
};

type State = {
  openedCreateMylistModal: boolean;
};

class GroupList extends React.Component<void, Props, State> {
  state: State;

  constructor() {
    super();

    this.state = {
      openedCreateMylistModal: false
    };
  }

  render() {
    const {
      ready,
      group,
      reload,
      createMylist,
      selectMylist
    } = this.props;

    if (!ready) return null; // [TODO] loading

    return (
      <div className={styles.container}>
        <div
          className={cx(
            photon['pane'], photon['pane-sm'], photon['sidebar'], styles.group
          )}
        >
          <ul className={photon['list-group']}>
            {
              group.map((item) => (
                <Item
                  id={item.id}
                  key={item.id}
                  src={item.img}
                  title={item.name}
                  public={item.public}
                  onClick={() => selectMylist(item.id)}
                  totalTime={item.totalTime}
                  totalVideos={item.totalVideos}
                  description={item.description}
                />
              ))
            }
          </ul>
        </div>
        <Actions
          create={() => this.setState({ openedCreateMylistModal: true })}
          reload={reload}
          goToSite={() => shell.openExternal('http://www.nicovideo.jp/my/mylist/#/home')}
        />
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

export default GroupList;

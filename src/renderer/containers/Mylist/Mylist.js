// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import * as mylistActions from '../../actions/mylist';
import Mylist from '../../components/pages/Mylist';

import type { State } from '../../types/states';
import type { MylistArray } from '../../types/states/mylist';

type MapStateToProps = {
  list: MylistArray;
  group: any; // TODO: fix
  pathname: string;
};

type MapDispatchToProps = {
  play: ('video' | 'music', number, MylistArray) => void;
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State) => {
  const pathname = state.router.location.pathname;
  const id = pathname.split('/').slice(-1)[0];
  let group = state.mylist.group.find((item) => item.id === id);

  // TODO: fix
  // 戻るときの冪等性が保てなくなる(他のユーザのマイリストを一回経由する場合)
  // meとuserの処理の通り道を一緒にする必要がある
  if (group === undefined) {
    group = state.users.user.mylists.find((mylist) => mylist.id === id);
  }

  return {
    list : state.mylist.mylist,
    id,
    group,
    pathname
  };
}

const mapDispatchToProps = (dispatch, a) => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mylist);

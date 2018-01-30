// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import * as mylistActions from '../../actions/mylist';
import GridList from '../../components/organisms/Mylsits/ItemGrid';

import type { State } from '../../types/states';
import type { Mylistitem, MylistitemList } from '../../types/states/Mylist';

type MapStateToProps = {
  id: string;
  list: MylistitemList
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, MylistitemList) => void;
  actionMylist: (Mylistitem) => {};
  loadMylist: (string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id: state.router.location.pathname.split('/').slice(-1)[0],
  list: state.mylist.mylist
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  },
  actionMylist: (video) => dispatch(mylistActions.removeVideo(video.groupId, video.itemId)),
  loadMylist: (id) => dispatch(mylistActions.loadMylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);

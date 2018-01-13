// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import * as mylistActions from '../../actions/mylist';
import GridList from '../../components/organisms/ItemGrid';

import type { State } from '../../types/states';
import type { Mylistitem } from '../../types/apis/mylist';

type DispatchProps = {
  play: (number, Array<Mylistitem>) => void;
  actionMylist: (Mylistitem) => {};
};

const mapStateToProps = (state: State) => ({
  list      : state.mylist.mylist,
  actionIcon: state.router.location.pathname === '/mylist' ? 'trash' : ''
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  },
  actionMylist: (video) =>
    dispatch(mylistActions.removeVideo(video.groupId, video.itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);

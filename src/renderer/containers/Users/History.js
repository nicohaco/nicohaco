// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as playerActions from '../../actions/player';
import History from '../../components/organisms/Users/History';

import type { State } from '../../types/states';

type MapStateToProps = {
  history: Object[]; // TODO: fix
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, Object[]) => void; // TODO: fix
  fetchMyHistory: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  history: state.users.me.history
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, list) => {
    dispatch(playerActions.insertToPlaylist(list));
    dispatch(playerActions.play(type, index));
  },
  fetchMyHistory: () => dispatch(actions.fetchMyHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

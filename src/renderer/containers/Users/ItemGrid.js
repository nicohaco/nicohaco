// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as playerActions from '../../actions/player';
import ItemGrid from '../../components/organisms/Users/ItemGrid';

import type { State } from '../../types/states';

type MapStateToProps = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

type MapDispatchToProps = {
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id: state.router.location.pathname.split('/').slice(-1)[0],
  videos: state.users.user.videos
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, list) => {
    dispatch(playerActions.insertToPlaylist(list));
    dispatch(playerActions.play(type, index));
  },
  fetchUserVideos: (id) => dispatch(actions.fetchUserVideos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemGrid);

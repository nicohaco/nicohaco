// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as playerActions from '../../actions/player';
import Timeline from '../../components/organisms/Users/Timeline';

import type { State } from '../../types/states';

type MapStateToProps = {
  id: string;
  timeline: Object[]; // TODO: fix
  // timeline: Object[] | Object[]; // TODO: fix
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, Object[]) => void; // TODO: fix
  fetchMyTimeline: () => {};
  fetchUserTimeline: (string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => {
  const id = state.router.location.pathname.split('/')[2];

  return {
    id,
    timeline: id === 'me' ?
      state.users.me.timeline :
      state.users.user.timeline
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, item: any) => { // TODO: fix
    dispatch(playerActions.insertToPlaylist([{
      title       : item.title,
      videoId     : item.id,
      thumbnailUrl: item.thumbnailUrl.normal
    }]));
    dispatch(playerActions.play(type, index));
  },
  fetchMyTimeline  : () => dispatch(actions.fetchMyTimeline()),
  fetchUserTimeline: (id) => dispatch(actions.fetchUserTimeline(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

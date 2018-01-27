// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as playerActions from '../../actions/player';
import Timeline from '../../components/organisms/Users/Timeline';

const mapStateToProps = (state) => {
  const id = state.router.location.pathname.split('/')[2];

  return {
    id,
    timeline: id === 'me' ?
      state.users.me.timeline :
      state.users.user.timeline
  };
};

const mapDispatchToProps = (dispatch) => ({
  play: (type, index, item) => {
    dispatch(playerActions.insertToPlaylist([{
      title: item.title,
      videoId: item.id,
      thumbnailUrl: item.thumbnailUrl.normal
    }]));
    dispatch(playerActions.play(type, index));
  },
  fetchMyTimeline: () => dispatch(actions.fetchMyTimeline()),
  fetchUserTimeline: (id) => dispatch(actions.fetchUserTimeline(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

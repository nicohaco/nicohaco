// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as playerActions from '../../actions/player';
import Timeline from '../../components/organisms/Users/Timeline';

const mapStateToProps = (state) => ({
  timeline: state.users.timeline
});

const mapDispatchToProps = (dispatch) => ({
  play: (type, index, item) => {
    dispatch(playerActions.insertToPlaylist([{
      title: item.title,
      videoId: item.id,
      thumbnailUrl: item.thumbnailUrl.normal
    }]));
    dispatch(playerActions.play(type, index));
  },
  fetchMyTimeline: () => dispatch(actions.fetchMyTimeline())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

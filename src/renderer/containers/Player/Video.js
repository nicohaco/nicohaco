import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import Video from '../../components/organisms/VideoPlayer';

const mapStateToProps = (state) => ({
  id: state.player.current.videoId,
  opened: state.player.playType === 'video' // TODO: delete
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(actions.closeVideoPlayer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);

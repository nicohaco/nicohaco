// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/page';
import Toolbar from '../../components/organisms/Header/Toolbar';

type DispatchToProps = {
  pushPage: (string) => {};
};

const mapStateToProps = (state) => ({
  path              : state.router.location.pathname,
  poster            : state.player.current.poster,
  videoId           : state.player.current.videoId,
  viewCount         : state.player.current.viewCount,
  postedDate        : state.player.current.postedDate,
  mylistCount       : state.player.current.mylistCount,
  commentCount      : state.player.current.commentCount,
  posterThumbnailUrl: state.player.current.posterThumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  pushPage: (path) => dispatch(actions.pushPage(path))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);

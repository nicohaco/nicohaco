// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/page';
import Toolbar from '../../components/organisms/Header/Toolbar';

import type { State } from '../../types/states/';

type MapStateToProps = {
  poster: string;
  videoId: string;
  viewCount: number;
  postedDate: string;
  mylistCount: number;
  commentCount: number;
  posterThumbnailUrl: string;
};

type MapDispatchToProps = {
  pushPage: (string) => {};
  goBackPage: () => {};
  goForwardPage: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  poster            : state.player.current.poster,
  videoId           : state.player.current.videoId,
  viewCount         : state.player.current.viewCount,
  postedDate        : state.player.current.postedDate,
  mylistCount       : state.player.current.mylistCount,
  commentCount      : state.player.current.commentCount,
  posterThumbnailUrl: state.player.current.posterThumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  pushPage: (path) => dispatch(actions.pushPage(path)),
  goBackPage: () => dispatch(actions.goBackPage()),
  goForwardPage: () => dispatch(actions.goForwardPage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);

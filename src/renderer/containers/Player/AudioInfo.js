// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import AudioInfo from '../../components/molecules/AudioInfo';

import type { State } from '../../types/states';

type MapStateToProps = {
  loop: 'none' | 'one' | 'all';
  title: string;
  disabled: boolean;
  totalTime: number;
  elapsedTime: number;
  thumbnailUrl: string;
  displayedLoader: boolean;
};

type MapDispatchToProps = {
  toggleLoop: ('none' | 'one' | 'all') => {};
  toggleStatus: (boolean) => {};
  updateElapsedTime: (number) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  loop:            state.player.loop,
  title:           state.player.current.title,
  disabled:        !state.player.current.src,
  totalTime:       state.player.current.totalTime,
  elapsedTime:     state.player.elapsedTime,
  thumbnailUrl:    state.player.current.thumbnailUrl,
  displayedLoader: state.player.displayedLoader
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  toggleLoop         : (mode) => dispatch(actions.toggleLoop(mode)),
  toggleStatus       : (status) => dispatch(actions.toggleStatus(status)),
  updateElapsedTime  : (time) => dispatch(actions.updateElapsedTime(time))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioInfo);

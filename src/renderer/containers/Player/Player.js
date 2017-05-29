// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import Player from '../../components/organisms/Player';

import type { State } from '../../types/states';

type DispatchToProps = {
  getDuration: (number) => {};
  toggleStatus: (boolean) => {};
  changeVolume: (number) => {};
  playSpecificAudio: (number) => {};
  updateElapsedTime: (number) => {};
};

const mapStateToProps = (state: State) => ({
  src            : state.player.current.src,
  index          : state.player.current.index,
  volume         : state.player.volume,
  status         : state.player.status,
  videoInfo      : state.player.current,
  elapsedTime    : state.player.elapsedTime,
  displayedLoader: state.player.displayedLoader
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  getDuration        : (time) => dispatch(actions.insertDuration(time)),
  toggleStatus       : (status) => dispatch(actions.toggleStatus(status)),
  changeVolume       : (volume) => dispatch(actions.changeVolume(volume)),
  playSpecificAudio  : (index) => dispatch(actions.playSpecificAudio(index)),
  updateElapsedTime  : (time) => dispatch(actions.updateElapsedTime(time)),
  changeLoadingStatus: (loaded) => dispatch(actions.changeLoadingStatus(loaded))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

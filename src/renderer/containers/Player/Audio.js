// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import Audio from '../../components/atoms/Audio';

import type { State } from '../../types/states';

type DispatchToProps = {
  toggleLoop: ('none' | 'one' | 'all') => {};
  getDuration: (number) => {};
  toggleStatus: (boolean) => {};
  changeVolume: (number) => {};
  playSpecificAudio: (number) => {};
  updateElapsedTime: (number) => {};
};

const mapStateToProps = (state: State) => ({
  src            : state.player.current.src,
  index          : state.player.current.index,
  looped: state.player.loop === 'one',
  status: state.player.status && state.player.current.src !== '',
  volume         : state.player.volume,
  elapsedTime    : state.player.elapsedTime,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  getDuration        : (time) => dispatch(actions.insertDuration(time)),
  playSpecificAudio  : (index) => dispatch(actions.playSpecificAudio(index)),
  updateElapsedTime  : (time) => dispatch(actions.updateElapsedTime(time)),
  changeLoadingStatus: (loaded) => dispatch(actions.changeLoadingStatus(loaded))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Audio);

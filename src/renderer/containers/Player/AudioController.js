// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import AudioController from '../../components/molecules/AudioController';

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
  volume         : state.player.volume,
  status         : state.player.status,
  disabled       : !state.player.current.src || !state.player.displayedLoader,
  elapsedTime    : state.player.elapsedTime
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  toggleStatus       : (status) => dispatch(actions.toggleStatus(status)),
  changeVolume       : (volume) => dispatch(actions.changeVolume(volume)),
  playSpecificAudio  : (index) => dispatch(actions.playSpecificAudio(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioController);

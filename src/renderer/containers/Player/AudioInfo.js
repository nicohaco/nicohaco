// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import AudioInfo from '../../components/molecules/AudioInfo';

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
  loop:            state.player.loop,
  title:           state.player.current.title,
  disabled:        !state.player.current.src,
  totalTime:       state.player.current.totalTime,
  elapsedTime:     state.player.elapsedTime,
  thumbnailUrl:    state.player.current.thumbnailUrl,
  displayedLoader: state.player.displayedLoader
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  toggleLoop         : (mode) => dispatch(actions.toggleLoop(mode)),
  toggleStatus       : (status) => dispatch(actions.toggleStatus(status)),
  updateElapsedTime  : (time) => dispatch(actions.updateElapsedTime(time))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioInfo);

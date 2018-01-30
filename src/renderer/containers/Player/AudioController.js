// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import AudioController from '../../components/molecules/AudioController';

import type { State } from '../../types/states';

type MapStateToProps = {
  index: number;
  volume: number;
  status: boolean;
  disabled: boolean;
};

type MapDispatchToProps = {
  toggleStatus: (boolean) => {};
  changeVolume: (number) => {};
  playSpecificAudio: (number) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State) => ({
  index          : state.player.current.index,
  volume         : state.player.volume,
  status         : state.player.status,
  disabled       : !state.player.current.src || !state.player.displayedLoader
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  toggleStatus       : (status) => dispatch(actions.toggleStatus(status)),
  changeVolume       : (volume) => dispatch(actions.changeVolume(volume)),
  playSpecificAudio  : (index) => dispatch(actions.playSpecificAudio(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioController);

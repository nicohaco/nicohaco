// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import Audio from '../../components/atoms/Audio';

import type { State } from '../../types/states';

type MapStateToProps = {
  src: string;
  index: number;
  looped: boolean;
  status: boolean;
  volume: number;
  elapsedTime: number;
};

type MapDispatchToProps = {
  getDuration: (number) => {};
  playSpecificAudio: (number) => {};
  updateElapsedTime: (number) => {};
  changeLoadingStatus: (boolean) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  src            : state.player.current.src,
  index          : state.player.current.index,
  looped: state.player.loop === 'one',
  status: state.player.status && state.player.current.src !== '',
  volume         : state.player.volume,
  elapsedTime    : state.player.elapsedTime,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  getDuration        : (time) => dispatch(actions.insertDuration(time)),
  playSpecificAudio  : (index) => dispatch(actions.playSpecificAudio(index)),
  updateElapsedTime  : (time) => dispatch(actions.updateElapsedTime(time)),
  changeLoadingStatus: (loaded) => dispatch(actions.changeLoadingStatus(loaded))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Audio);

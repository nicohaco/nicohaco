// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import SubWindow from 'react-icons/lib/md/launch';
import * as actions from '../../actions/page';

import type { State } from '../../types/states';

type MapStateToProps = {
  style: {
    color: '#999' | '#333';
  };
};

type MapDispatchToProps = {
  onClick: () => {};
};

export type Props = MapDispatchToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  style: {
    color: state.common.subWindow.opened ? '#999' : '#333'
  }
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  onClick: () => dispatch(actions.controlSubWindow())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubWindow);

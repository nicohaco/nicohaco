// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import SubWindow from 'react-icons/lib/md/launch';
import * as actions from '../../actions/page';

type MapDispatchToProps = {
  updateSubWindowStatus: (boolean) => {};
};

export type Props = MapDispatchToProps;

const mapStateToProps = (state) => ({
  style: {
    color: state.common.subWindow.opened ? '#999' : '#333'
  }
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  onClick: () => dispatch(actions.controlSubWindow(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubWindow);

// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/common';
import * as mylistActions from '../../actions/mylist';
import Modal from '../../components/organisms/Modal/AddMylist';

import type { State } from '../../types/states';

type DispatchToProps = {
  add: (string, string) => {};
  launch: () => {};
  closeModal: () => {};
};

const mapStateToProps = (state: State) => ({
  video      : state.common.modal.data,
  opened     : state.common.modal.opened,
  mylistgroup: state.mylist.group
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  add: (groupId, videoId) =>
    dispatch(mylistActions.addVideo(groupId, videoId)),
  launch    : () => dispatch(mylistActions.fetchMylistgroup()),
  closeModal: () => dispatch(actions.closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

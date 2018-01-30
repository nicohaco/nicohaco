// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/common';
import * as mylistActions from '../../actions/mylist';
import Modal from '../../components/organisms/Modal/AddMylist';

import type { State } from '../../types/states';
import type { Mylistgroup } from '../../types/states/mylist';

type MapStateToProps = {
  video: {
    videoId: string;
    contentId: string;
  };
  opened: boolean;
  mylistgroup: Mylistgroup;
};

type MapDispatchToProps = {
  add: (string, string) => {};
  launch: () => {};
  closeModal: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  video      : state.common.modal.data,
  opened     : state.common.modal.opened,
  mylistgroup: state.mylist.group
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  add: (groupId, videoId) => dispatch(mylistActions.addVideo(groupId, videoId)),
  launch    : () => dispatch(mylistActions.fetchMylistgroup()),
  closeModal: () => dispatch(actions.closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

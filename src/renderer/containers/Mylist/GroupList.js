// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/mylist';
import GroupList from '../../components/organisms/Mylist/GroupList';

import type { State } from '../../types/states';

type DispatchProps = {
  createMylist: (string) => {};
  selectMylist: (string) => {};
};

const mapStateToProps = (state: State) => ({
  group: state.mylist.group,
  ready: state.mylist.ready
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  reload      : () => dispatch(actions.fetchMylistgroup()),
  createMylist: (name) => dispatch(actions.createMylist(name)),
  selectMylist: (id) => dispatch(actions.loadMylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupList);

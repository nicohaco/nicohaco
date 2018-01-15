// @flow

import { connect } from 'react-redux';
import * as actions from '../actions/mylist';
import * as pageActions from '../actions/page';
import SideMenu from '../components/organisms/SideMenu';

type DispatchProps = {
  createMylist: (string) => {};
  selectMylist: (string) => {};
};

const mapStateToProps = (state: State) => ({
  group: state.mylist.group,
  ready: state.mylist.ready,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  setup: () => dispatch(actions.setup()), // for loading mylistgroup
  reload      : () => dispatch(actions.fetchMylistgroup()),
  pushPage    : (path) => dispatch(pageActions.pushPage(path)),
  createMylist: (name) => dispatch(actions.createMylist(name)),
  selectMylist: (id) => {
    dispatch(pageActions.pushPage(`/mylist/${id}`));
    dispatch(actions.loadMylist(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

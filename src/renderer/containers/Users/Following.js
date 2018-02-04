// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as pageActions from '../../actions/page';
import Following from '../../components/organisms/Users/Following';

import type { State } from '../../types/states';

type MapStateToProps = {
  following: Object[]; // TODO: fix
};

type MapDispatchToProps = {
  goToUserPage: (string) => {};
  fetchMyFollowing: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  following: state.users.me.following
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  goToUserPage    : (id) => dispatch(pageActions.pushPage(`/users/${id}`)),
  fetchMyFollowing: () => dispatch(actions.fetchMyFollowing())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Following);

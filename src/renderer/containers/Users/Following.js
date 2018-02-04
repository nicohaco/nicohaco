// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as pageActions from '../../actions/page';
import WrapperComponent from '../../components/WrapperComponent';
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
  setup       : () => dispatch(actions.fetchMyFollowing()),
  goToUserPage: (id) => dispatch(pageActions.pushPage(`/users/${id}`))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapperComponent(Following));

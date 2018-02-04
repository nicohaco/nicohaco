// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import User from '../../components/pages/User';
import WrapperComponent from '../../components/WrapperComponent';

import type { State } from '../../types/states';

type MapStateToProps = {
  id: string;
  title: string;
  followers: string;
  thumbnailUrl: string;
};

type MapDispatchToProps = {
  fetchUserData: (string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id          : state.router.location.pathname.split('/').slice(-1)[0],
  title       : state.users.user.name,
  followers   : state.users.user.followers,
  thumbnailUrl: state.users.user.thumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  setup: (id) => dispatch(actions.fetchUserData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapperComponent(User));

// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as pageActions from '../../actions/page';
import Mylists from '../../components/organisms/Users/Mylists';
import WrapperComponent from '../../components/WrapperComponent';

import type { State } from '../../types/states';

type MapStateToProps = {
  id: string;
  mylists: Object[]; // TODO: fix
};

type MapDispatchToProps = {
  goToMylist: (string, string) => {};
  fetchUserMylists: (string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id     : state.router.location.pathname.split('/').slice(-1)[0],
  mylists: state.users.user.mylists
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  setup: (id) => dispatch(actions.fetchUserMylists(id)),
  goToMylist: (id, userId) => dispatch(pageActions.pushPage(`/mylist/${id}?userId=${userId}`))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapperComponent(Mylists));

// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as pageActions from '../../actions/page';
import Mylists from '../../components/organisms/Users/Mylists';

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
  id: state.router.location.pathname.split('/').slice(-1)[0],
  mylists: state.users.user.mylists
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  goToMylist: (id, userId) => dispatch(pageActions.pushPage(`/mylist/${id}?userId=${userId}`)),
  fetchUserMylists: (id) => dispatch(actions.fetchUserMylists(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mylists);

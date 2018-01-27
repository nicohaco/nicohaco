// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import User from '../../components/pages/User';

import type { State } from '../../types/states';

type MapStateToProps = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

type MapDispatchToProps = {
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id: state.router.location.pathname.split('/').slice(-1)[0],
  title: state.users.user.name,
  followers: state.users.user.followers,
  thumbnailUrl: state.users.user.thumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  fetchUserData: (id) => dispatch(actions.fetchUserData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

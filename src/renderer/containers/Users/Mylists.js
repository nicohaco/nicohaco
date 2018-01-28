// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import Mylists from '../../components/organisms/Users/Mylists';

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
  mylists: state.users.user.mylists
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  fetchUserMylists: (id) => dispatch(actions.fetchUserMylists(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mylists);

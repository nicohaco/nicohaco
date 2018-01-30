// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Me } from '../../components/pages/User';

import type { State } from '../../types/states';

type MapStateToProps = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

type MapDispatchToProps = {
  logout: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id: state.auth.userData.id,
  title: state.auth.userData.name,
  thumbnailUrl: state.auth.userData.thumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  logout: () => dispatch(actions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Me);

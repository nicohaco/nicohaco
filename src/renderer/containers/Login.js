// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import Login from '../components/pages/Login';

type MapDispatchToProps = {
  login: (string, string) => {};
};

export type Props = MapDispatchToProps;

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  login: (mail, password) => dispatch(actions.login(mail, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);

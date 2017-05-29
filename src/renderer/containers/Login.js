// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import Login from '../components/pages/Login';

type DispatchProps = {
  login: (string, string) => {};
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  login: (mail, password) => dispatch(actions.login(mail, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

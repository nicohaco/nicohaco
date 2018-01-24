// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import Me from '../../components/pages/User';

const mapStateToProps = (state) => ({
  id: state.auth.userData.id,
  title: state.auth.userData.name,
  thumbnailUrl: state.auth.userData.thumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  logout: () => dispatch(actions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Me);

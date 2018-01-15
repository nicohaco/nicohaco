// @flow

import { connect } from 'react-redux';
import Me from '../../components/pages/User';

const mapStateToProps = (state) => ({
  id: state.auth.userData.id,
  title: state.auth.userData.name,
  thumbnailUrl: state.auth.userData.thumbnailUrl
});

export default connect(
  mapStateToProps
)(Me);

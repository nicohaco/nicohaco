// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import * as pageActions from '../../actions/page';
import Following from '../../components/organisms/Users/Following';

const mapStateToProps = (state) => ({
  following: state.users.me.following
});

const mapDispatchToProps = (dispatch) => ({
  goToUserPage: (id) => dispatch(pageActions.pushPage(`/users/${id}`)),
  fetchMyFollowing: () => dispatch(actions.fetchMyFollowing())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Following);

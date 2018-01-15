import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import Following from '../../components/organisms/Users/Following';

const mapStateToProps = (state) => ({
  following: state.users.following
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyFollowing: () => dispatch(actions.fetchMyFollowing())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Following);

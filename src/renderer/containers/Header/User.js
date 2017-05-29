// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import * as dbActions from '../../actions/db';
import * as pageActions from '../../actions/page';
import * as searchActions from '../../actions/search';
import User from '../../components/organisms/Header/User';

type DispatchToProps = {
  logout: () => {};
  deleteDB: () => void;
  deleteHistory: () => {};
};

const mapStateToProps = (state) => ({
  id          : state.auth.userData.id,
  name        : state.auth.userData.name,
  thumbnailUrl: state.auth.userData.thumbnailUrl
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  logout  : () => dispatch(actions.logout()),
  deleteDB: () => {
    dispatch(dbActions.deleteDB());
    dispatch(pageActions.pushPage('login'));
  },
  deleteHistory: () => dispatch(searchActions.deleteSearchHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

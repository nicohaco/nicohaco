// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/page';
import * as dbActions from '../actions/db';
import Root from '../components/pages/Root';

type DispatchProps = {
  routePage: () => {};
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  deleteDB: () => {
    dispatch(dbActions.deleteDB());
    dispatch(actions.pushPage('/login'));
  },
  routePage: () => dispatch(actions.routePage()),
  updateSubWindowStatus: (flag) => dispatch(actions.updateSubWindowStatus(flag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

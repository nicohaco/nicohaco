// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/page';
import * as dbActions from '../actions/db';
import * as playerActions from '../actions/player';
import Root from '../components/pages/Root';

type MapDispatchToProps = {
  deleteDB: () => void;
  routePage: () => {};
  toggleStatus: () => {};
  updateSubWindowStatus: (boolean) => {};
};

export type Props = MapDispatchToProps;

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  deleteDB: () => {
    dispatch(dbActions.deleteDB());
    dispatch(actions.pushPage('/login'));
  },
  routePage            : () => dispatch(actions.routePage()),
  toggleStatus         : () => dispatch(playerActions.toggleStatus()),
  updateSubWindowStatus: (flag) => dispatch(actions.updateSubWindowStatus(flag))
});

export default connect(
  null,
  mapDispatchToProps
)(Root);

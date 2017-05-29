// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/page';
import Root from '../components/pages/Root';

type DispatchProps = {
  routePage: () => {};
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  routePage: () => dispatch(actions.routePage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

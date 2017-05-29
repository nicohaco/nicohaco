// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/mylist';
import Mylist from '../../components/pages/Mylist';

import type { State } from '../../types/states';

type DispatchToProps = {
  setup: () => {};
};

const mapStateToProps = (state: State) => ({
  group: state.mylist.group
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  setup: () => dispatch(actions.setup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mylist);

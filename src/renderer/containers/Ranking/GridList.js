// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import * as commonActions from '../../actions/common';
import GridList from '../../components/organisms/ItemGrid';

import type { State } from '../../types/states';
import type { Mylistitem } from '../../types/apis/mylist';

type DispatchToProps = {
  play: (number, Array<Mylistitem>) => void;
};

const mapStateToProps = (state: State) => ({
  list      : state.ranking.result,
  actionIcon: state.router.location.pathname === '/ranking' ? 'plus' : ''
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  play: (index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(index));
  },
  actionMylist: (item) => dispatch(commonActions.openModal(item)) // add
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);

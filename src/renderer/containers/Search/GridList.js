// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import * as commonActions from '../../actions/common';
import GridList from '../../components/organisms/ItemGrid';

import type { State } from '../../types/states';
import type { Mylistitem } from '../../types/apis/mylist';

type MapStateToProps = {
  list: Mylistitem[];
  actionIcon: 'add' | '';
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, Mylistitem[]) => void;
  actionMylist: (Mylistitem) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  list      : state.search.result,
  actionIcon: state.router.location.pathname === '/search' ? 'add' : ''
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  },
  actionMylist: (item) => dispatch(commonActions.openModal(item)) // add
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);

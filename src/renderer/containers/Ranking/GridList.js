// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import * as commonActions from '../../actions/common';
import GridList from '../../components/organisms/ItemGrid';

import type { State } from '../../types/states';
import type { MylistitemList, Mylistitem } from '../../types/states/mylist';

type MapStateToProps = {
  list: MylistitemList;
  actionIcon: 'add' | '';
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, MylistitemList) => void;
  actionMylist: (Mylistitem) => {};
};

const mapStateToProps = (state: State): MapStateToProps => ({
  list      : state.ranking.result,
  actionIcon: state.router.location.pathname.includes('/ranking') ? 'add' : ''
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

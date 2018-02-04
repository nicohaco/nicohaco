// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import { history } from '../../store/configureStore';
import * as actions from '../../actions/player';
import * as mylistActions from '../../actions/mylist';
import * as commonActions from '../../actions/common';
import GridList from '../../components/organisms/Mylsits/ItemGrid';

import type { State } from '../../types/states';
import type { Mylistitem, MylistitemList } from '../../types/states/Mylist';

type MapStateToProps = {
  id: string;
  list: MylistitemList,
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, MylistitemList) => void;
  actionMylist: (Mylistitem) => {};
  loadMylist: (string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  id  : state.router.location.pathname.split('/').slice(-1)[0],
  me  : !state.router.location.search.includes('userId'),
  list: state.mylist.mylist
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  },
  actionMylist: (item) => {
    if (!history.location.search.includes('userId')) { // my mylist
      dispatch(mylistActions.removeVideo(item.groupId, item.itemId));
    }
    else {
      dispatch(commonActions.openModal(item)); // add
    }
  },
  loadMylist: (id) => dispatch(mylistActions.loadMylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);

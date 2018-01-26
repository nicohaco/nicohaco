// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import { formatDate } from '../../utils/format';
import * as actions from '../../actions/player';
import * as mylistActions from '../../actions/mylist';
import GridList from '../../components/organisms/ItemGrid';

import type { State } from '../../types/states';
import type { Mylistitem } from '../../types/apis/mylist';

type MapStateToProps = {
  list: Object[]; // TODO: fix
  actionIcon: string;
};

type MapDispatchToProps = {
  play: ('video' | 'audio', number, Array<Mylistitem>) => void;
  actionMylist: (Mylistitem) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  list: state.mylist.mylist.map((item: any) => // TODO: fix
    ({...item, postedDate: formatDate(item.postedDate * 1000)})
  ),
  actionIcon: state.router.location.pathname === '/mylist' ? 'trash' : ''
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  },
  actionMylist: (video) =>
    dispatch(mylistActions.removeVideo(video.groupId, video.itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);

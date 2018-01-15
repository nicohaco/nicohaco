// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/player';
import Mylist from '../../components/pages/Mylist';

const mapStateToProps = (state: State) => {
  const pathname = state.router.location.pathname;
  const id = pathname.split('/').slice(-1)[0];

  return {
    list : state.mylist.mylist,
    group: state.mylist.group.find((item) => item.id === id) || [],
    pathname
  };
}

const mapDispatchToProps = (dispatch) => ({
  play: (type, index, list) => {
    dispatch(actions.insertToPlaylist(list));
    dispatch(actions.play(type, index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mylist);

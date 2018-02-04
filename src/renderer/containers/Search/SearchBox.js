// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/search';
import * as pageActions from '../../actions/page';
import SearchBox from '../../components/organisms/Search/SearchBox';
import WrapperComponent from '../../components/WrapperComponent';

import type { State } from '../../types/states';
import type { Params } from '../../types/apis/search';

type MapStateToProps = {
  searchHistory: {
    text: string;
    date: number;
  }[];
};

type MapDispatchToProps = {
  search: (Params) => void;
  showSearchHistory: () => {};
  insertSearchHistory: (string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  searchHistory: state.search.history.reverse()
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  setup: () => dispatch(actions.showSearchHistory()),
  search: (params) => {
    dispatch(actions.search(params));
    dispatch(pageActions.pushPage('/search'));
  },
  insertSearchHistory: (text) => dispatch(actions.insertSearchHistory(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapperComponent(SearchBox));

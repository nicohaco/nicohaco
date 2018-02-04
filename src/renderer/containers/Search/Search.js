// @flow

import { connect } from 'react-redux';
import Search from '../../components/pages/Search';

import type { State } from '../../types/states';

type MapStateToProps = {
  title: string;
};

export type Props = MapStateToProps;

const mapStateToProps = (state: State): MapStateToProps => ({
  title: state.search.searchWord
});

export default connect(
  mapStateToProps
)(Search);

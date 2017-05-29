// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/ranking';
import CategoryList from '../../components/organisms/Ranking/CategoryList';

type DispatchToProps = {
  selectCategory: (string) => {};
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  selectCategory: (category) => dispatch(actions.fetchRanking(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

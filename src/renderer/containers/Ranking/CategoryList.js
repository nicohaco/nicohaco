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
  selectCategory: (category, target, period) =>
    dispatch(actions.fetchRanking(category, target, period))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

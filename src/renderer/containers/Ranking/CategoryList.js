// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/ranking';
import * as pageActions from '../../actions/page';
import CategoryList from '../../components/organisms/Ranking/CategoryList';

type DispatchToProps = {
  selectCategory: (string) => {};
};

const mapStateToProps = (state) => ({
  category: state.router.location.pathname
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchToProps => ({
  changeCategory: (category) => dispatch(pageActions.pushPage(`/ranking/${category}`)),
  fetchCategory: (category, target, period) => {
    dispatch(actions.fetchRanking(category, target, period));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

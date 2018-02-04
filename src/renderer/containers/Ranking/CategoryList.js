// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/ranking';
import * as pageActions from '../../actions/page';
import CategoryList from '../../components/organisms/Ranking/CategoryList';

type MapStateToProps = {
  category: string;
};

type MapDispatchToProps = {
  changeCategory: (string) => {};
  fetchCategory: (string, string, string) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state) => ({
  category: state.router.location.pathname
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): MapDispatchToProps => ({
  changeCategory: (category) => dispatch(pageActions.pushPage(`/ranking/${category}`)),
  fetchCategory : (category, target, period) =>
    dispatch(actions.fetchRanking(category, target, period))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

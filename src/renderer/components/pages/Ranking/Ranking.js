// @flow

import React from 'react';
import MainContainer from '../../templates/MainContainer';
import CategoryList from '../../../containers/Ranking/CategoryList';
import GridList from '../../../containers/Ranking/GridList';
import Modal from '../../../containers/Modal/AddMylist';

const Ranking = () => (
  <MainContainer
    left={<CategoryList />}
    right={<GridList />}
  >
    <Modal /> { /* [TODO] depricate */ }
  </MainContainer>
);

export default Ranking;

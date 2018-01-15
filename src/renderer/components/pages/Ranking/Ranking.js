// @flow

import React from 'react';
import ActionPage from '../../templates/ActionPage';
import CategoryList from '../../../containers/Ranking/CategoryList';
import GridList from '../../../containers/Ranking/GridList';
import Modal from '../../../containers/Modal/AddMylist';

const Ranking = () => (
  <ActionPage toolbar={<CategoryList />}>
    <GridList />
    <Modal /> { /* [TODO] depricate */ }
  </ActionPage>
);

export default Ranking;

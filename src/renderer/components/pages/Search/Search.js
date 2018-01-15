// @flow

import React from 'react';
import ActionPage from '../../templates/ActionPage';
import GridList from '../../../containers/Search/GridList';
import SearchBox from '../../../containers/Search/SearchBox';
import Modal from '../../../containers/Modal/AddMylist';

const Search = () => (
  <ActionPage toolbar={<SearchBox />}>
    <GridList />
    <Modal /> { /* [TODO] depricate */ }
  </ActionPage>
);

export default Search;

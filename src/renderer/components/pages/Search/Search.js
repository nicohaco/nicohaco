// @flow

import React from 'react';
import MainContainer from '../../templates/MainContainer';
import GridList from '../../../containers/Search/GridList';
import SearchBox from '../../../containers/Search/SearchBox';
import Modal from '../../../containers/Modal/AddMylist';

const Search = () => (
  <MainContainer
    left={<SearchBox />}
    right={<GridList />}
  >
    <Modal /> { /* [TODO] depricate */ }
  </MainContainer>
);

export default Search;

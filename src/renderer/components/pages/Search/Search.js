// @flow

import React from 'react';
import ActionPage from '../../templates/ActionPage';
import GridList from '../../../containers/Search/GridList';
import SearchBox from '../../../containers/Search/SearchBox';
import Modal from '../../../containers/Modal/AddMylist';
import styles from './style.css';

const Search = (props) => (
  <ActionPage toolbar={<h1 className={styles.title}>{props.title}</h1>}>
    <GridList />
    <Modal /> { /* [TODO] depricate */ }
  </ActionPage>
);

export default Search;

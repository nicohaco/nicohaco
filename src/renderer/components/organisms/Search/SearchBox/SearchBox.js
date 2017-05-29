// @flow

import React from 'react';
import {
  formatDate,
  createSearchParams
} from '../../../../utils/format';
import SearchInput from '../../../atoms/SearchInput';
import List from '../../../atoms/List';
import styles from './style.css';

type Props = {
  search: () => {};
  searchHistory: {
    id: number;
    text: string;
    date: number;
  }[];
  showSearchHistory: () => {};
  insertSearchHistory: (string) => {};
};

class SearchBox extends React.Component<void, Props, void> {
  searchProcess = (text: string) => {
    if (text === '') {
      return;
    }

    this.props.insertSearchHistory(text);
    this.props.showSearchHistory();
    this.props.search(createSearchParams(text));
  }

  componentWillMount() {
    this.props.showSearchHistory();
  }

  render() {
    const {
      searchHistory
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <SearchInput
            onEnter={this.searchProcess}
            placeholder="Search from niconico"
          />
        </div>
        <div className={styles.history}>
          <List
            items={searchHistory.map((item) => ({
              key    : item.date,
              title  : item.text,
              message: formatDate(item.date),
              onClick: () => this.searchProcess(item.text)
            }))}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;

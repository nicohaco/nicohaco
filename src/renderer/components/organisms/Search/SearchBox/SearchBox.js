// @flow

import React from 'react';
import Select from 'react-select';
import {
  formatDate,
  createSearchParams
} from '../../../../utils/format';
import List from '../../../atoms/List';
import styles from './style.css';

import type { Props } from '../../../../containers/Search/SearchBox';

type State = {
  word: string;
};

class SearchBox extends React.PureComponent<Props, State> {
  state: State;

  searchProcess = (text: string) => {
    if (text === '') return;

    this.setState({word: text});
    this.props.insertSearchHistory(text);

    setTimeout(() => {
      this.props.showSearchHistory();
    }, 100); // TODO: fix
    this.props.search(createSearchParams(text));
  }

  onInputKeyDown = (e: Object) => { // TODO: weak

    // enter
    if (e.keyCode === 13) {
      const text = e.nativeEvent.target.attributes.value.value;

      this.searchProcess(text);
      event.preventDefault();
    }
  }

  constructor() {
    super();

    this.state = { word: '' };
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
          <Select
            value={this.state.word}
            placeholder="Search from niconico"
            onChange={(r) => this.searchProcess(r.value)}
            onInputKeyDown={this.onInputKeyDown}
            options={searchHistory.map((item) => ({
              label: `${item.text} - 最終更新 ${formatDate(item.date)}`,
              value: item.text
            }))}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;

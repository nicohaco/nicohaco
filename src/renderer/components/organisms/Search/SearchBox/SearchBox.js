// @flow

import React from 'react';
import Select from 'react-select';
import SearchIcon from 'react-icons/lib/md/search';
import { createSearchParams } from '../../../../utils/format';
import styles from './style.css';

import type { Props } from '../../../../containers/Search/SearchBox';

type State = {
  word: string;
};

class SearchBox extends React.PureComponent<Props, State> {
  state: State;

  initWord = () => {
    this.setState({ word: '' });
  };

  searchProcess = (text: string) => {
    if (text === '') return;

    this.setState({ word: text });
    this.props.insertSearchHistory(text);

    setTimeout(() => {
      this.props.setup();
    }, 100);
    this.props.search(createSearchParams(text));
  };

  constructor() {
    super();

    this.state = { word: '' };
  }

  onInputKeyDown = (e: Object) => { // TODO: weak

    // enter
    if (e.keyCode === 13) {
      const text = e.nativeEvent.target.attributes.value.value;

      this.searchProcess(text);
      event.preventDefault();
    }
  };

  render() {
    const {
      searchHistory
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <Select
            value={this.state.word}
            placeholder={
              <span>
                <SearchIcon /> Search from Niconico
              </span>
            }
            onChange={(r) => {
              if (r === null) this.initWord(); // delete button
              else this.searchProcess(r.value);
            }}
            onInputKeyDown={this.onInputKeyDown}
            options={searchHistory.map((item) => ({
              label: item.text,
              value: item.text
            }))}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;

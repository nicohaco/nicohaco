// @flow

import type { Search as State } from '../types/states/search';
import type { Search as Action } from '../types/actions/search';

const initialState = {
  result : [],
  history: [],
  searchWord: ''
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      return Object.assign({}, state, {
        result: action.payload.result,
        searchWord: action.payload.searchWord
      });
    case 'SHOW_SEARCH_HISTORY_SUCCESS':
      return Object.assign({}, state, {
        history: action.payload
      });
    case 'RESET':
      return initialState;
    case 'SEARCH':
    case 'SHOW_SEARCH_HISTORY':
    case 'INSERT_SEARCH_HISTORY':
    case 'DELETE_SEARCH_HISTORY':
      return state;
    default:
      (action: empty);
      return state;
  }
};

export default reducer;

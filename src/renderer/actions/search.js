// @flow

import type {
  SearchAction as Search,
  ShowSearchHistory,
  InsertSearchHistory,
  DeleteSearchHistory
} from '../types/actions/search';
import type { Params } from '../types/apis/search';

export const search = (params: Params): Search => ({
  type: 'SEARCH',
  params
});

export const showSearchHistory = (): ShowSearchHistory => ({
  type: 'SHOW_SEARCH_HISTORY'
});

export const insertSearchHistory = (text: string): InsertSearchHistory => ({
  type: 'INSERT_SEARCH_HISTORY',
  text
});

export const deleteSearchHistory = (): DeleteSearchHistory => ({
  type: 'DELETE_SEARCH_HISTORY'
});

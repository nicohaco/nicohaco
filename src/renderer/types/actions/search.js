// @flow

import type {
  Params,
  ResultSchema
} from '../apis/search';

export type Reset = {
  type: 'RESET';
};

export type SearchAction = {
  type: 'SEARCH';
  params: Params;
};

export type ShowSearchHistory = {
  type: 'SHOW_SEARCH_HISTORY';
};

export type InsertSearchHistory = {
  type: 'INSERT_SEARCH_HISTORY';
  text: string;
};

export type DeleteSearchHistory = {
  type: 'DELETE_SEARCH_HISTORY';
};

/**
 * from saga
 */

export type SearchSuccess = {
  type: 'SEARCH_SUCCESS';
  payload: ResultSchema[];
};

export type ShowSearchHistorySuccess = {
  type: 'SHOW_SEARCH_HISTORY_SUCCESS';
  payload: {
    text: string;
    date: number;
  }[];
};

export type Search =
  Reset |
  SearchAction |
  SearchSuccess |
  ShowSearchHistory |
  InsertSearchHistory |
  DeleteSearchHistory |
  ShowSearchHistorySuccess;

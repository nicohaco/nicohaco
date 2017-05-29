// @flow

import type {
  Setup,
  LoadMylist,
  FetchMylist,
  CreateMylist,
  FetchMylistgroup
} from '../types/actions/mylist';

export const setup = (): Setup => ({
  type: 'SETUP_MYLIST'
});

export const fetchMylistgroup = (): FetchMylistgroup => ({
  type: 'FETCH_MYLISTGROUP'
});

export const createMylist = (name: string): CreateMylist => ({
  type: 'CREATE_MYLIST',
  name
});

/**
 * @param {number} id - mylistgroup's number
 */
export const loadMylist = (id: string): LoadMylist => ({
  type: 'LOAD_MYLIST',
  id
});

export const fetchMylist = (id: number): FetchMylist => ({
  type: 'FETCH_MYLIST',
  id
});

export const addVideo = (groupId: string, videoId: string) => ({
  type: 'ADD_VIDEO',
  groupId,
  videoId
});

// NOTE: don't use the videoId, niconico allows only itemId
export const removeVideo = (groupId: string, itemId: string) => ({
  type: 'REMOVE_VIDEO',
  groupId,
  itemId
});

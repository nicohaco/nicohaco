// @flow

import type { FLV } from '../apis/video';
import type { Current } from '../states/player';
import type { Mylistitem } from '../apis/mylist';

export type Play = {
  type: 'PLAY';
  index: number;
};

export type PlayNextAudio = {
  type: 'PLAY_NEXT_AUDIO';
};

export type InsertToPlaylist = {
  type: 'INSERT_TO_PLAYLIST';
  playlist: Array<Mylistitem>;
};

export type ToggleStatus = {
  type: 'TOGGLE_STATUS';
  status?: boolean;
};

export type UpdateElapsedTime = {
  type: 'UPDATE_ELAPSED_TIME';
  elapsedTime: number;
};

export type PlaySpecificAudio = {
  type: 'PLAY_SPECIFIC_AUDIO';
  index: number;
};

export type ChangeVolume = {
  type: 'CHANGE_VOLUME';
  volume: number;
};

export type InsertDuration = {
  type: 'INSERT_TOTAL_TIME';
  duration: number;
};

export type ChangeLoadingStatus = {
  type: 'CHANGE_LOADING_STATUS';
  loaded: boolean;
};

/**
 * from saga
 */

export type FetchFlvSuccess = {
  type: 'FETCH_FLV_SUCCESS';
  payload: FLV;
};

export type InsertCurrentAudio = {
  type: 'INSERT_CURRENT_AUDIO';
  payload: Current & {
    src: string;
    lengthSeconds: number;
    mylistCounter: number;
  };
};

export type Player =
Play |
PlayNextAudio |
  ChangeVolume |
  ToggleStatus |
  PlaySpecificAudio |
  FetchFlvSuccess |
  InsertToPlaylist |
  InsertDuration |
  UpdateElapsedTime |
  ChangeLoadingStatus |
  InsertCurrentAudio;

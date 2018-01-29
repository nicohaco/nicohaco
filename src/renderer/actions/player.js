// @flow

import type {
  Play,
  ToggleLoop,
  ChangeVolume,
  ToggleStatus,
  InsertToPlaylist,
  UpdateElapsedTime,
  PlaySpecificAudio
} from '../types/actions/player';
import type { Mylistitem } from '../types/apis/mylist';

export const play = (playType, index: number): Play => ({
  type: 'PLAY',
  playType,
  index
});

export const toggleLoop = (mode: 'none' | 'one' | 'all'): ToggleLoop => ({
  type: 'TOGGLE_LOOP',
  mode
});

export const insertToPlaylist =  (playlist: Array<Mylistitem>): InsertToPlaylist => ({
    type: 'INSERT_TO_PLAYLIST',
    playlist
  });

export const toggleStatus = (status?: boolean): ToggleStatus => ({
  type: 'TOGGLE_STATUS',
  status
});

export const updateElapsedTime = (elapsedTime: number): UpdateElapsedTime => ({
  type: 'UPDATE_ELAPSED_TIME',
  elapsedTime
});

export const playSpecificAudio = (index: number): PlaySpecificAudio => ({
  type: 'PLAY_SPECIFIC_AUDIO',
  index
});

export const changeVolume = (volume: number): ChangeVolume => ({
  type: 'CHANGE_VOLUME',
  volume
});

export const changeLoadingStatus = (loaded: boolean) => ({
  type: 'CHANGE_LOADING_STATUS',
  loaded
});

export const insertDuration = (duration: number) => ({ // [TODO] rename
  type: 'INSERT_TOTAL_TIME',
  duration
});

export const closeVideoPlayer = () => ({
  type    : 'SET_PLAY_TYPE',
  playType: 'music'
});

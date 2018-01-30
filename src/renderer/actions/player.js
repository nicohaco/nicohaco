// @flow

import type {
  Play,
  ToggleLoop,
  ChangeVolume,
  ToggleStatus,
  InsertDuration,
  InsertToPlaylist,
  UpdateElapsedTime,
  PlaySpecificAudio,
  ChangeLoadingStatus
} from '../types/actions/player';
import type { Mylistitem } from '../types/states/Mylist';

export const play = (playType: 'audio' | 'video', index: number): Play => ({
  type: 'PLAY',
  playType,
  index
});

export const toggleLoop = (mode: 'none' | 'one' | 'all'): ToggleLoop => ({
  type: 'TOGGLE_LOOP',
  mode
});

export const insertToPlaylist =  (playlist: any): InsertToPlaylist => ({ // TODO: fix
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

export const changeLoadingStatus = (loaded: boolean): ChangeLoadingStatus => ({
  type: 'CHANGE_LOADING_STATUS',
  loaded
});

export const insertDuration = (duration: number): InsertDuration => ({ // [TODO] rename
  type: 'INSERT_TOTAL_TIME',
  duration
});

export const closeVideoPlayer = () => ({
  type    : 'SET_PLAY_TYPE',
  playType: 'music'
});

import {ExtractReturn} from '../types/ExtractReturn';
export type Actions =
    ExtractReturn<typeof play> |
    ExtractReturn<typeof toggleLoop> |
    ExtractReturn<typeof insertToPlaylist> |
    ExtractReturn<typeof toggleStatus> |
    ExtractReturn<typeof updateElapsedTime> |
    ExtractReturn<typeof playSpecificAudio> |
    ExtractReturn<typeof changeVolume> |
    ExtractReturn<typeof changeLoadingStatus> |
    ExtractReturn<typeof insertDuration> |
    ExtractReturn<typeof closeVideoPlayer>;

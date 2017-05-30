// @flow

import type { State } from '../types/states';

export const getNico               = (state: State) => state.auth.nicoInstance;
export const getPlayer             = (state: State) => state.player; // [TODO] rename
export const getUserData           = (state: State) => state.auth.userData;
export const getPlaylist           = (state: State) => state.player.playlist;
export const getCurrentMylist      = (state: State) => state.mylist.mylist;
export const getCurrentPlaying     = (state: State) => state.player.current;
export const getCurrentMylistgroup = (state: State) => state.mylist.group;

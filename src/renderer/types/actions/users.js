// @flow

import type {
  UserData,
  GetMyHistory,
  GetMyTimeline,
  GetMyFollowing,
  GetUserVideos,
  GetUserMylists
} from '../apis/user';

// saga
export type FetchUserDataSuccess = {
  type: 'FETCH_USER_DATA_SUCCESS';
  payload: {
    userData: UserData;
  };
};

export type FetchUserVideosSuccess = {
  type: 'FETCH_USER_VIDEOS_SUCCESS';
  payload: GetUserVideos;
};

export type FetchUserMylistsSuccess = {
  type: 'FETCH_USER_MYLISTS_SUCCESS';
  payload: GetUserMylists;
};

export type FetchUserTimelineSuccess = {
  type: 'FETCH_USER_TIMELINE_SUCCESS';
  payload: any; // TODO: fix
};

export type FetchMyHistorySuccess = {
  type: 'FETCH_MY_HISTORY_SUCCESS';
  payload: GetMyHistory;
};

export type FetchMyTimelineSuccess = {
  type: 'FETCH_MY_TIMELINE_SUCCESS';
  payload: {
    data: GetMyTimeline;
  };
};

export type FetchMyFollowingSuccess = {
  type: 'FETCH_MY_FOLLOWING_SUCCESS';
  payload: GetMyFollowing;
};

export type Users =
  FetchUserDataSuccess |
  FetchUserVideosSuccess |
  FetchUserMylistsSuccess |
  FetchUserTimelineSuccess |
  FetchMyHistorySuccess |
  FetchMyTimelineSuccess |
  FetchMyFollowingSuccess;

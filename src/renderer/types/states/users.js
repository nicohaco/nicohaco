// @flow

import type {
  GetUserVideos,
  GetUserMylists,
  GetMyHistory,
  GetMyTimeline,
  GetMyFollowing
} from '../apis/user';

export type Users = {
  user: {
    name: string;
    videos: GetUserVideos;
    mylists: GetUserMylists;
    timeline: GetMyTimeline;
    followers: string;
    thumbnailUrl: string;
  };
  me: {
    history: GetMyHistory;
    timeline: GetMyTimeline;
    following: GetMyFollowing;
  };
};

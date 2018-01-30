// @flow

export type OwnData = {
  id: string;
  area: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  session: string;
};

export type UserData = {
  name: string;
  followers: string;
  thumbnailUrl: string;
};

// getInfo
export type GetInfo = OwnData;

// getMyHistory
export type GetMyHistory = {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  totalTime: string;
  watchedDate: string;
  watchedCount: string;
  viewCount: number;
  commentCount: number;
  mylistCount: number;
  postedDate: string;
}[];

export type GetMyFollowing = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
}[];

export type GetMyTimeline = {
  actionLog: {
    kiriban: number;
    viewCount: number;
  };
  createdAt: string;
  id: string;
  isDeletable: boolean;
  isMuted: boolean;
  isVisible: boolean;
  muteContext: {
    sender: {
      id: string;
      idType: string;
      type: string;
    };
    trigger: string;
  };
  senderNiconicoUser: {
    icons: {
      tags: {
        defaultValue: {
          urls: {
            s50x50: string;
          };
        };
      };
    };
    id: number;
    nickname: string;
  };
  topic: string;
  video: {
    id: string;
    resolution: {
      height: number;
      width: number;
    };
    status: string;
    thumbnailUrl: {
      normal: string;
    };
    title: string;
    videoWatchPageId: string;
  };
}[];

export type GetUserVideos = {
  title: string;
  videoId: string;
  groupId: string;
  totalTime: string;
  viewCount: number;
  postedDate: string;
  mylistCount: number;
  commentCount: number;
  thumbnailUrl: string;
}[];

export type GetUserMylists = {
  id: string;
  num: number;
  title: string;
  thumbnailUrls: string[];
}[];

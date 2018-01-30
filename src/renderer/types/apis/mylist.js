// @flow

// getUserMylists
export type GetUserMylists = {
  id: string;
  num: string;
  title: string;
  thumbnailUrls: string[];
}[];

// getUserMylist
export type GetUserMylist = {
  title: string;
  videoId: string;
  totalTime: string; // 00:00
  postedDate: string;
  thumbnailUrl: string;
}[];

// all
export type GetMylistgroup = {
  createTime: number;
  defaultSort: string;
  description: string;
  iconId: string;
  id: string;
  name: string;
  public: string;
  sortOrder: string;
  updateTime: number;
  userId: number;

  totalTime: string;
  totalVideos: number;
}[];

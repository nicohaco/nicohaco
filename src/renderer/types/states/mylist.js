// @flow

import type {
  GetMylistgroup
} from '../apis/mylist';

export type Mylistitem = {
  title: string;
  itemId: string;
  groupId: string;
  deleted: string;
  videoId: string;
  groupType: string;
  totalTime: string;
  viewCount: string;
  updateTime: number;
  postedDate: string;
  mylistCount: string;
  lastResBody: string;
  thumbnailUrl: string;
  commentCount: string;
};

export type MylistitemList = Mylistitem[];

export type Mylist = {
  ready: boolean;
  group: GetMylistgroup;
  mylist: MylistitemList;
};

// @flow

export type Mylistgroup = {
  id: string;
  name: string;
  iconId: string;
  public: string;
  userId: string;
  sortOrder: string;
  updateTime: number;
  createTime: number;
  defaultSort: string;
  description: string;
};

export type Mylistitem = {
  title: string;
  itemId: string;
  numRes: string;
  videoId: string;
  watchId: string;
  deleted: string;
  groupId: string;
  groupType: string;
  contentId?: string;
  updateTime: number;
  lastResBody: string;
  viewCounter: string;
  thumbnailUrl: string;
  firstRetrieve: number;
  lengthSeconds: string;
  mylistCounter: string;
};

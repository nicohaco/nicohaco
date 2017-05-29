// @flow

import type { Mylistitem } from '../apis/mylist';

export type Current = {
  src: string;
  title: string;
  index: number;
  poster: string;
  videoId: string;
  totalTime: number;
  viewCount: number;
  postedDate: string;
  mylistCount: number;
  commentCount: number;
  thumbnailUrl: string;
  posterThumbnailUrl: string;
};

export type Player = {
  current: Current;
  volume: number;
  status: boolean;
  playlist: Array<Mylistitem>;
  elapsedTime: number;
  displayedLoader: boolean;
};

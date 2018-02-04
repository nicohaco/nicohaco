// @flow

import type { MylistitemList } from './mylist';

export type Current = {
  src: string;
  title: string;
  index: number;
  poster: string;
  videoId: string;
  posterId: string;
  totalTime: number;
  viewCount: number;
  postedDate: string;
  mylistCount: number;
  commentCount: number;
  thumbnailUrl: string;
  posterThumbnailUrl: string;
};

export type Player = {
  loop: 'none' | 'one' | 'all';
  current: Current;
  volume: number;
  status: boolean;
  playlist: MylistitemList;
  elapsedTime: number;
  displayedLoader: boolean;
  playType: 'music' | 'video',
};

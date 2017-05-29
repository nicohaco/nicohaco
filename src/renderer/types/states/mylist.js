// @flow

import type {
  Mylistitem,
  Mylistgroup
} from '../apis/mylist';

export type GroupArray = Array<Mylistgroup & {
    img: string;
    totalTime: number;
    totalVideos: number;
  }>;

export type MylistArray = Array<Mylistitem>;

export type Mylist = {
  ready: boolean;
  group: GroupArray;
  mylist: MylistArray;
};

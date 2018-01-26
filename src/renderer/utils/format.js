// @flow

import convertKeys from 'convert-keys';

import type { CustomApiSchema } from '../type/customSchema';
import type { Params } from '../types/apis/search';

export const formatTime = (time: number): string => {
  const hr = (~~(time / 3600)).toString().padStart(2, '0');
  const min = (~~((time % 3600) / 60)).toString().padStart(2, '0');
  const sec = (~~(time % 60)).toString().padStart(2, '0');

  return `${(hr !== '00' ? `${hr}:` : '')}${min}:${sec}`;
};

// [TODO] fix
export const formatDate = (unixTime: number): string => {

  // Sun Jan 18 1970 16:19:47 GMT+0900 (JST)
  // const format = 'YYYY-MM-DD hh:mm:ss.SSS';

  const splitedDate = ((new Date(unixTime)).toString().split(' '));

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const m = (month.findIndex((item) => item === splitedDate[1]) + 1).toString().padStart(2, '0');
  const time = splitedDate[4].split(':').slice(0, 2).join(':');

  return `${splitedDate[3]}/${m}/${splitedDate[2]} ${time}`;
};

export const formatDateOfISO8601 = (date: string): string => {
  // 2018-01-24T01:15:43+09:00
  const splitedDate = date.split('T');

  const [year, month, day] = splitedDate[0].split('-');
  const [hour, min] = splitedDate[1].split(':');

  return `${year}/${month}/${day} ${hour}:${min}`;
}

// eslint-disable-next-line flowtype/no-weak-types
export const formatApiSchema = (o: Object): CustomApiSchema => {
  const obj = convertKeys.toCamel(o);

  return {
    title       : obj.title,
    itemId      : obj.itemId,
    groupId     : obj.groupId,
    deleted     : obj.deleted,
    videoId     : obj.videoId || obj.watchId || obj.contentId,
    groupType   : obj.groupType,
    totalTime   : obj.lengthSeconds,
    viewCount   : obj.viewCounter || obj.commentCount,
    updateTime  : obj.updateTime,
    postedDate  : obj.firstRetrieve || obj.postedDate || obj.startTime,
    mylistCount : obj.mylistCounter || obj.mylistCount,
    lastResBody : obj.lastResBody,
    thumbnailUrl: obj.thumbnailUrl,
    commentCount: obj.commentCounter || obj.numRes || obj.commentCount
  };
};

export const createSearchParams = (text: string): Params => ({
  q       : text,
  _sort   : '-viewCounter',
  _limit  : 100,
  fields  : 'contentId,title,description,tags,categoryTags,viewCounter,mylistCounter,commentCounter,startTime,thumbnailUrl',
  targets : 'title',
  _context: 'nicoapi'
});

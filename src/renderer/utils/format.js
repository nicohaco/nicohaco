// @flow

import convertKeys from 'convert-keys';

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

  return `${splitedDate[3]}年${m}月${splitedDate[2]}日 ${splitedDate[4]}`;
};

// eslint-disable-next-line flowtype/no-weak-types
export const formatApiSchema = (obj: Object): Object =>
  convertKeys.toCamel(obj);

export const createSearchParams = (text: string): Params => ({
  q       : text,
  _sort   : '-viewCounter',
  _limit  : 100,
  fields  : 'contentId,title,description,tags,categoryTags,viewCounter,mylistCounter,commentCounter,startTime,thumbnailUrl',
  targets : 'title',
  _context: 'nicoapi'
});

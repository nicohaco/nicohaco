// @flow

import Dexie from 'dexie';

const db = new Dexie('nicohako');

// mylist:
//   videoId,
//   title,
//   updateTime,
//   totalTime,
//   thumbnailUrl,
//   mylistCounter,
//   viewCounter,
//   mylistgroupIds,
//   itemId

db.version(1).stores({
  history    : '++id, text, date',
  userData   : 'id, name, area, thumbnailUrl, description, session',
  mylistgroup: 'id, name, createTime, updateTime, description, public, userId, mylist, refleshTimeForMylist, img, totalTime, totalVideos'
});

export default db;

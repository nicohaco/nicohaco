// @flow

/* eslint-disable camelcase */

import { put, take, select, takeLatest } from 'redux-saga/effects';
import convertKeys from 'convert-keys';
import { getNico, getRouter } from './selectors';
import {
  formatDate,
  formatTime,
  formatApiSchema
} from '../utils/format';

import type { Effect } from 'redux-saga';
import type {
  AddVideo,
  LoadMylist,
  FetchMylist,
  RemoveVideo,
  CreateMylist
} from '../types/actions/mylist';

/**
 * setup for mylist page
 */
function *setup(): Generator<Effect, void, *> {
  try {
    yield put({ type: 'SHOW_MYLISTGROUP' });
    const { mylistgroup } = (yield take('SHOW_MYLISTGROUP_SUCCESS')).payload;

    if (mylistgroup.length === 0) {
      yield put({ type: 'FETCH_MYLISTGROUP' });
    }
  } catch (e) {
    console.error(e);
  }
}

/**
 * add the video to specified mylist
 * @param {AddVideo} action
 */
function *addVideo(action: AddVideo): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);

    // If this is successful, `undefined` will return.
    yield nico.mylist.addVideo({
      item_id    : action.videoId,
      group_id   : action.groupId,
      item_type  : 0,
      description: ''
    });

    yield put({
      type: 'FETCH_MYLIST',
      id  : action.groupId
    });

    const { mylistitem } = (yield take('FETCH_MYLIST_SUCCESS')).payload;

    yield put({
      type  : 'INSERT_MYLIST',
      id    : action.groupId,
      mylist: mylistitem
    });

    yield put({ type: 'CLOSE_MODAL' });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * remove the video from specified mylist
 * @param {RemoveVideo} action
 */
function *removeVideo(action: RemoveVideo): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);

    // If this is successful, `undefined` will return.
    yield nico.mylist.deleteVideo({
      group_id      : action.groupId,
      'id_list[0][]': action.itemId
    });

    yield put({
      type: 'FETCH_MYLIST',
      id  : action.groupId
    });

    const { mylistitem } = (yield take('FETCH_MYLIST_SUCCESS')).payload;

    yield put({
      type  : 'INSERT_MYLIST',
      id    : action.groupId,
      mylist: mylistitem
    });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * load specified mylist
 * @param {Loadmylist} action
 */
function *loadMylist(action: LoadMylist): Generator<Effect, void, *> {
  try {
    yield put({
      type: 'SHOW_MYLIST',
      id  : action.id
    });

    const { payload } = yield take('SHOW_MYLIST_SUCCESS');

    if (payload.mylistitem.length === 0) {
      yield put({
        type: 'FETCH_MYLIST',
        id  : action.id
      });

      const { payload } = yield take('FETCH_MYLIST_SUCCESS');

      const own = !(yield select(getRouter)).location.search.includes('userId');

      // e.g. after loading mylistgroup
      if (own) {
        yield put({
          type : 'UPDATE_MYLISTGROUP',
          items: {
            img: payload.mylistitem.map((item) => item.thumbnailUrl).slice(0, 4)
          },
          groupId: payload.groupId
        });
      }

      yield put({
        type  : 'INSERT_MYLIST',
        id    : action.id,
        mylist: payload.mylistitem
      });
    }
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * fetch specified mylist
 * @param {Fetchmylist} action
 */
function *fetchMylist(action: FetchMylist): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);

    // TODO: strict
    const own = !(yield select(getRouter)).location.search.includes('userId');

    const mylist = own ?
      yield nico.mylist.get(action.id) :
      yield nico.mylist.getUserMylist(action.id);

    // own has mylist.mylistitem, and user has only mylist
    const res = own ? mylist.mylistitem : mylist;

    let totalTime = 0;

    const mylistitem = res.map((item) => {
      const data = own ? item.item_data : item;

      if (own) {
        totalTime += ~~data.length_seconds;

        return own ? formatApiSchema({
          ...data,

          // for use when erasing from mylist
          itemId    : item.item_id,
          groupId   : action.id,
          postedDate: formatDate(item.item_data.first_retrieve * 1000)

        }) : data;
      }
      return data;
    });

    const totalVideos = mylistitem.length;
    totalTime = formatTime(totalTime);

    if (own) {

      // insert totalTime and totalVideos in this mylist
      yield put({
        type : 'UPDATE_MYLISTGROUP',
        items: {
          img: mylistitem.map((item) => item.thumbnailUrl).slice(0, 4),
          totalTime,
          totalVideos
        },
        groupId: action.id
      });
    }

    yield put({
      type   : 'FETCH_MYLIST_SUCCESS',
      payload: {
        totalTime,
        mylistitem,
        totalVideos,
        groupId: action.id
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * create new mylist
 * @param {CreateMylist} action
 */
function *createMylist(action: CreateMylist): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);

    yield nico.mylist.create({
      name        : action.name,
      public      : 0, // [TODO] fix
      icon_id     : 0,
      description : '',
      default_sort: 0
    });

    yield put({ type: 'FETCH_MYLISTGROUP' });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * fetch mylistgroup
 */
function *fetchMylistgroup(): Generator<Effect, void, *> {
  try {
    const nico = yield select(getNico);
    const group = yield nico.mylist.getAll();

    const groupList = group.mylistgroup.map((item) => convertKeys.toCamel(item));

    yield put({
      type   : 'INSERT_MYLISTGROUP',
      payload: {
        mylistgroup: groupList
      }
    });

    yield put({
      type   : 'FETCH_MYLISTGROUP_SUCCESS',
      payload: {
        mylistgroup: groupList
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * Root for mylist
 */
export default function *mylistProcess(): Generator<Effect, void, *> {
  yield takeLatest('ADD_VIDEO', addVideo);
  yield takeLatest('LOAD_MYLIST', loadMylist);
  yield takeLatest('SETUP_MYLIST', setup);
  yield takeLatest('REMOVE_VIDEO', removeVideo);
  yield takeLatest('FETCH_MYLIST', fetchMylist);
  yield takeLatest('CREATE_MYLIST', createMylist);
  yield takeLatest('FETCH_MYLISTGROUP', fetchMylistgroup);
}

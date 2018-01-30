// @flow

/* eslint-disable flowtype/space-after-type-colon */

import { ipcRenderer } from 'electron';
import { put, select, takeLatest } from 'redux-saga/effects';
import {
  getNico,
  getPlayer,
  getPlaylist,
  getCurrentSubWindowStatus
} from './selectors';

import type { Effect } from 'redux-saga';
import type {
  Play,
  PlaySpecificAudio
} from '../types/actions/player';

// [TODO] implement for DMC
/**
 * play the video
 * @param {Play} action
 */
function *play(action: Play): Generator<Effect, void, *> {
  try {
    const nico     = yield select(getNico);
    const playlist = yield select(getPlaylist);

    const videoInfo = playlist[action.index];

    yield put({
      type    : 'SET_PLAY_TYPE',
      playType: action.playType
    });

    if (action.playType === 'video') {
      const payload = {
        title       : videoInfo.title,
        videoId     : videoInfo.videoId,
        viewCount   : videoInfo.viewCount,
        commentCount: videoInfo.numRes || videoInfo.commentCount,
        mylistCount : videoInfo.mylistCount
      };

      const openedSubWindow = yield select(getCurrentSubWindowStatus);

      if (openedSubWindow) {
        ipcRenderer.send('sendVideoInfoToSubWindow', payload);
      }

      yield put({ // TODO: fix
        type   : 'INSERT_CURRENT_AUDIO',
        payload
      });

      return;
    }

    if (videoInfo) {

      // co is undefined...(sm is ok)
      const src = yield nico.video.getFLV(videoInfo.videoId);
      const info = yield nico.video.getVideoData(videoInfo.videoId);

      yield ipcRenderer.send('setNicohistory', info.nicoHistory);

      yield put({
        type   : 'FETCH_FLV_SUCCESS',
        payload: {
          src,
          index: action.index,
          ...Object.assign({}, videoInfo, {
            ...info
          })
        }
      });

      yield put({
        type       : 'UPDATE_ELAPSED_TIME',
        elapsedTime: 0
      });

      yield put({
        type  : 'TOGGLE_STATUS',
        status: true
      });
    }
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * play specified video
 * @param {Playspecificaudio} action
 */
function *playSpecificAudio(action: PlaySpecificAudio): Generator<Effect, void, *> {
  const loop            = (yield select(getPlayer)).loop;
  const currentPlaylist = yield select(getPlaylist);
  const newVideo        = currentPlaylist[action.index];

  if (loop === 'all' && currentPlaylist.length === action.index) {
    yield put({
      type : 'PLAY',
      index: 0
    });
  }
  else if (newVideo) {
    yield put({
      type : 'PLAY',
      index: action.index
    });
  }
  else {

    // reset
    yield put({ type: 'RESET_CURRENT_AUDIO' });
    yield put({
      type  : 'TOGGLE_STATUS',
      status: false
    });
  }
}

/**
 * reset current video info
 */
function *resetCurrentAudio(): Generator<Effect, void, *> {
  yield put({
    type   : 'INSERT_CURRENT_AUDIO',
    payload: {
      src               : '',
      title             : '',
      index             : 0,
      poster            : '',
      videoId           : '',
      totalTime         : 0,
      viewCount         : 0,
      postedDate        : '',
      commentCount      : 0,
      mylistCount       : 0,
      thumbnailUrl      : '',
      posterThumbnailUrl: ''
    }
  });
}

/**
 * Root for player
 */
export default function *playerProcess(): Generator<Effect, void, *> {
  yield takeLatest('PLAY', play);
  yield takeLatest('PLAY_SPECIFIC_AUDIO', playSpecificAudio);
  yield takeLatest('RESET_CURRENT_AUDIO', resetCurrentAudio);
}

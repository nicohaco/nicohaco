// @flow

/* eslint-disable flowtype/space-after-type-colon */

import { ipcRenderer } from 'electron';
import { takeEvery, effects } from 'redux-saga';
import {
  getNico,
  getPlayer,
  getPlaylist
} from './selectors';

import type { Effect } from 'redux-saga';
import type {
  Play,
  PlaySpecificAudio
} from '../types/actions/player';

const {
  put,
  select
} = effects;

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

    if (videoInfo) {

      // co is undefined...(sm is ok)
      const src = yield nico.video.getFLV(videoInfo.videoId);
      const {
        poster,
        viewCount,
        postedDate,
        mylistCount,
        nicoHistory,
        commentCount,
        posterThumbnailUrl
      } = yield nico.video.getVideoData(videoInfo.videoId);

      yield ipcRenderer.send('setNicohistory', nicoHistory);

      yield put({
        type   : 'FETCH_FLV_SUCCESS',
        payload: {
          src,
          index: action.index,
          ...Object.assign({}, videoInfo, {
            poster,
            viewCount,
            postedDate,
            mylistCount,
            commentCount,
            posterThumbnailUrl
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
function *playSpecificAudio(action: PlaySpecificAudio):
  Generator<Effect, void, *>
{
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
function *resetCurrentAudio() {
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
  yield takeEvery('PLAY', play);
  yield takeEvery('PLAY_SPECIFIC_AUDIO', playSpecificAudio);
  yield takeEvery('RESET_CURRENT_AUDIO', resetCurrentAudio);
}

// @flow

import type { Player as State } from '../types/states/player';
import type { Player as Action } from '../types/actions/player';

const initialState = {
  loop   : 'none',
  current: {
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
  },
  volume         : 0.5, // 0 -1
  status         : false, // play: true, stop: false
  playlist       : [],
  elapsedTime    : 0,
  displayedLoader: false,

  playType: 'music' // music, video
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_FLV_SUCCESS': // [TODO] combine fetch_flv_success and reset.... name is insertCurrentAudio
      return Object.assign({}, state, {
        current: {
          src               : action.payload.src,
          title             : action.payload.title,
          index             : action.payload.index,
          poster            : action.payload.poster,
          videoId           : action.payload.videoId,
          totalTime         : action.payload.lengthSeconds,
          viewCount         : action.payload.viewCount,
          postedDate        : action.payload.postedDate,
          commentCount      : action.payload.commentCount,
          mylistCount       : action.payload.mylistCount,
          thumbnailUrl      : action.payload.thumbnailUrl,
          posterThumbnailUrl: action.payload.posterThumbnailUrl
        }
      });
    case 'INSERT_CURRENT_AUDIO':
      return Object.assign({}, state, {
        current: {
          src               : action.payload.src,
          title             : action.payload.title,
          index             : action.payload.index,
          poster            : action.payload.poster,
          videoId           : action.payload.videoId,
          totalTime         : action.payload.lengthSeconds,
          viewCount         : action.payload.viewCount,
          postedDate        : action.payload.postedDate,
          commentCount      : action.payload.commentCount,
          mylistCount       : action.payload.mylistCount,
          thumbnailUrl      : action.payload.thumbnailUrl,
          posterThumbnailUrl: action.payload.posterThumbnailUrl
        }
      });

      // Video information obtained from search doesn't have `lengthSeconds`.;(
    case 'INSERT_TOTAL_TIME':
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, {
          totalTime: action.duration
        })
      });
    case 'INSERT_TO_PLAYLIST':
      return Object.assign({}, state, {
        playlist: action.playlist
      });
    case 'TOGGLE_STATUS':
      return Object.assign({}, state, {
        status: action.status !== undefined ?
          action.status :
          !state.status
      });
    case 'TOGGLE_LOOP':
      return Object.assign({}, state, {
        loop: action.mode
      });
    case 'UPDATE_ELAPSED_TIME':
      return Object.assign({}, state, {
        elapsedTime: action.elapsedTime
      });
    case 'CHANGE_VOLUME':
      return Object.assign({}, state, {
        volume: action.volume
      });
    case 'CHANGE_LOADING_STATUS':
      return Object.assign({}, state, {
        displayedLoader: !action.loaded
      });
    case 'RESET':
      return initialState;
    case 'PLAY':
    case 'PLAY_NEXT_AUDIO':
    case 'PLAY_SPECIFIC_AUDIO':
      return state;
    case 'SET_PLAY_TYPE':
      return action.playType === 'video' ?
        { ...state, playType: action.playType } :
        { ...state, playType: action.playType, current: initialState.current };
    default:
      (action: empty);
      return state;
  }
};

export default reducer;

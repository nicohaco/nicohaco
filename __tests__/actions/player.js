import * as actions from '../../src/renderer/actions/player';

describe('actions/player', () => {
  it('should create play', () => {
    const index = 1;

    const expectedAction = {
      type: 'PLAY',
      index
    };

    expect(actions.play(index)).toEqual(expectedAction);
  });

  it('should create insertToPlaylist', () => {
    const playlist = ['a'];

    const expectedAction = {
      type: 'INSERT_TO_PLAYLIST',
      playlist
    };

    expect(actions.insertToPlaylist(playlist)).toEqual(expectedAction);
  });

  it('should create toggleStatus', () => {
    const status = false;

    const expectedAction = {
      type: 'TOGGLE_STATUS',
      status
    };

    expect(actions.toggleStatus(status)).toEqual(expectedAction);
  });

  it('should create updateElapsedTime', () => {
    const elapsedTime = 100;

    const expectedAction = {
      type: 'UPDATE_ELAPSED_TIME',
      elapsedTime
    };

    expect(actions.updateElapsedTime(elapsedTime)).toEqual(expectedAction);
  });

  it('should create playSpecificAudio', () => {
    const index = 12;

    const expectedAction = {
      type: 'PLAY_SPECIFIC_AUDIO',
      index
    };

    expect(actions.playSpecificAudio(index)).toEqual(expectedAction);
  });

  it('should create changeVolume', () => {
    const volume = 100;

    const expectedAction = {
      type: 'CHANGE_VOLUME',
      volume
    };

    expect(actions.changeVolume(volume)).toEqual(expectedAction);
  });

  it('should create changeLoadingStatus', () => {
    const loaded = true;

    const expectedAction = {
      type: 'CHANGE_LOADING_STATUS',
      loaded
    };

    expect(actions.changeLoadingStatus(loaded)).toEqual(expectedAction);
  });

  it('should create insertDuration', () => {
    const duration = 1000;

    const expectedAction = {
      type: 'INSERT_TOTAL_TIME',
      duration
    };

    expect(actions.insertDuration(duration)).toEqual(expectedAction);
  });

});

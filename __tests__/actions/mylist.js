import * as actions from '../../src/renderer/actions/mylist';

describe('actions/mylist', () => {
  it('should create setup', () => {
    const expectedAction = {
      type: 'SETUP_MYLIST'
    };

    expect(actions.setup()).toEqual(expectedAction);
  });

  it('should create fetchMylistgroup', () => {
    const expectedAction = {
      type: 'FETCH_MYLISTGROUP'
    };

    expect(actions.fetchMylistgroup()).toEqual(expectedAction);
  });

  it('should create createMylist', () => {
    const name = 'nn';

    const expectedAction = {
      type: 'CREATE_MYLIST',
      name
    };

    expect(actions.createMylist(name)).toEqual(expectedAction);
  });

  it('should create loadMylist', () => {
    const id = 'i';

    const expectedAction = {
      type: 'LOAD_MYLIST',
      id
    };

    expect(actions.loadMylist(id)).toEqual(expectedAction);
  });

  it('should create fetchMylist', () => {
    const id = 'i';

    const expectedAction = {
      type: 'FETCH_MYLIST',
      id
    };

    expect(actions.fetchMylist(id)).toEqual(expectedAction);
  });

  it('should create addVideo', () => {
    const groupId = '12';
    const videoId = 'sm9';

    const expectedAction = {
      type: 'ADD_VIDEO',
      groupId,
      videoId
    };

    expect(actions.addVideo(groupId, videoId)).toEqual(expectedAction);
  });

  it('should create removeVideo', () => {
    const groupId = '12';
    const itemId = '11';

    const expectedAction = {
      type: 'REMOVE_VIDEO',
      groupId,
      itemId
    };

    expect(actions.removeVideo(groupId, itemId)).toEqual(expectedAction);
  });

});

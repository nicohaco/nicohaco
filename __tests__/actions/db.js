import * as actions from '../../src/renderer/actions/db';

describe('actions/db', () => {
  it('should create delteDB', () => {
    const expectedAction = {
      type: 'DELETE_DB'
    };

    expect(actions.deleteDB()).toEqual(expectedAction);
  });
});

import * as actions from '../../src/renderer/actions/common';

describe('actions/common', () => {
  it('should create openModal', () => {
    const data = 'd';

    const expectedAction = {
      type: 'OPEN_MODAL',
      data
    };

    expect(actions.openModal(data)).toEqual(expectedAction);
  });

  it('should create closeModal', () => {
    const expectedAction = {
      type: 'CLOSE_MODAL'
    };

    expect(actions.closeModal()).toEqual(expectedAction);
  });
});

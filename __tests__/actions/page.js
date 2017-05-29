import * as actions from '../../src/renderer/actions/page';

describe('actions/page', () => {
  it('should create pushPage', () => {
    const path = 'mylist';

    const expectedAction = {
      type: 'PUSH_PAGE',
      path
    };

    expect(actions.pushPage(path)).toEqual(expectedAction);
  });

  it('should create routePage', () => {
    const expectedAction = {
      type: 'ROUTE_PAGE'
    };

    expect(actions.routePage()).toEqual(expectedAction);
  });
});

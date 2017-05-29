import * as actions from '../../src/renderer/actions/search';

describe('actions/search', () => {
  it('should create search', () => {
    const params = {
      a: 1
    };

    const expectedAction = {
      type: 'SEARCH',
      params
    };

    expect(actions.search(params)).toEqual(expectedAction);
  });

  it('should create showSearchHistory', () => {
    const expectedAction = {
      type: 'SHOW_SEARCH_HISTORY'
    };

    expect(actions.showSearchHistory()).toEqual(expectedAction);
  });

  it('should create insertSearchHistory', () => {
    const text = 'tt';

    const expectedAction = {
      type: 'INSERT_SEARCH_HISTORY',
      text
    };

    expect(actions.insertSearchHistory(text)).toEqual(expectedAction);
  });
});

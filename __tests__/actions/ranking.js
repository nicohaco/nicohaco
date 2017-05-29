import * as actions from '../../src/renderer/actions/ranking';

describe('actions/ranking', () => {
  it('should create fetchRanking', () => {
    const category = 'cc';

    const expectedAction = {
      type: 'FETCH_RANKING',
      category
    };

    expect(actions.fetchRanking(category)).toEqual(expectedAction);
  });
});

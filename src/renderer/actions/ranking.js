// @flow

export const fetchRanking = (category: string, target, period) => ({
  type: 'FETCH_RANKING',
  category,
  target,
  period
});

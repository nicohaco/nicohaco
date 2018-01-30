// @flow

export const fetchRanking = (category: string, target: string, period: string) => ({
  type: 'FETCH_RANKING',
  category,
  target,
  period
});

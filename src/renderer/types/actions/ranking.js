// @flow

import type { ResultSchema } from '../apis/ranking';

export type FetchRanking = {
  category: string;
  target: 'fav' | 'view' | 'res' | 'mylist';
  period: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'total';
};

export type FetchRankingSuccess = {
  type: 'FETCH_RANKING_SUCCESS';
  payload: {
    ranking: Array<ResultSchema>;
  };
};

export type Ranking = FetchRankingSuccess;

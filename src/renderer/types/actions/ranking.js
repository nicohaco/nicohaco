// @flow

import type { ResultSchema } from '../apis/ranking';

export type FetchRanking = {
  category: string;
};

export type FetchRankingSuccess = {
  type: 'FETCH_RANKING_SUCCESS';
  payload: {
    ranking: Array<ResultSchema>;
  };
};

export type Ranking = FetchRankingSuccess;

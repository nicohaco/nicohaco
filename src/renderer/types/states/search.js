// @flow

import type { ResultSchema } from '../apis/search';

export type Search = {
  result: Array<ResultSchema>;
  history: Array<{
    text: string;
    date: number;
  }>;
};

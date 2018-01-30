// @flow

import type { DeleteDB } from '../types/actions/db';

export const deleteDB = (): DeleteDB => ({
  type: 'DELETE_DB'
});

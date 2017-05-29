// @flow

import type { PushPage } from '../types/actions/page';

export const pushPage = (path: string): PushPage => ({
  type: 'PUSH_PAGE',
  path
});

// go to login or mylist
export const routePage = () => ({
  type: 'ROUTE_PAGE'
});

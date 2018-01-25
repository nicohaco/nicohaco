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

export const goBackPage = () => ({
  type: 'GO_BACK_PAGE'
});

export const goForwardPage = () => ({
  type: 'GO_FORWARD_PAGE'
});

export const updateSubWindowStatus = (opened: boolean) => ({
  type: 'UPDATE_SUB_WINDOW_STATUS',
  opened
});

// @flow

import type {
  PushPage,
  RoutePage,
  GoBackPage,
  GoForwardPage,
  ControlSubWindow,
  UpdateSubWindowStatus
} from '../types/actions/page';

export const pushPage = (path: string): PushPage => ({
  type: 'PUSH_PAGE',
  path
});

// go to login or mylist
export const routePage = (): RoutePage => ({
  type: 'ROUTE_PAGE'
});

export const goBackPage = (): GoBackPage => ({
  type: 'GO_BACK_PAGE'
});

export const goForwardPage = (): GoForwardPage => ({
  type: 'GO_FORWARD_PAGE'
});

export const controlSubWindow = (): ControlSubWindow => ({
  type: 'CONTROL_SUB_WINDOW'
});

export const updateSubWindowStatus = (opened: boolean): UpdateSubWindowStatus => ({
  type: 'UPDATE_SUB_WINDOW_STATUS',
  opened
});

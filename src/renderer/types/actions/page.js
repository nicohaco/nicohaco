// @flow

export type PushPage = {
  type: 'PUSH_PAGE';
  path: string;
};

export type RoutePage = {
  type: 'ROUTE_PAGE';
};

export type GoBackPage = {
  type: 'GO_BACK_PAGE';
};

export type GoForwardPage = {
  type: 'GO_FORWARD_PAGE';
};

export type ControlSubWindow = {
  type: 'CONTROL_SUB_WINDOW';
};

export type UpdateSubWindowStatus = {
  type: 'UPDATE_SUB_WINDOW_STATUS';
  opened: boolean;
};

export type Page =
  PushPage |
  RoutePage |
  GoBackPage |
  GoForwardPage |
  ControlSubWindow |
  UpdateSubWindowStatus;

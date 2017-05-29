// @flow

export type OpenModal = {
  type: 'OPEN_MODAL';
  data: Object; // eslint-disable-line flowtype/no-weak-types
};

export type CloseModal = {
  type: 'CLOSE_MODAL';
};

export type Common = OpenModal | CloseModal;

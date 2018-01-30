// @flow

import type {
  OpenModal,
  CloseModal
} from '../types/actions/common';

// eslint-disable-next-line flowtype/no-weak-types
export const openModal = (data: Object): OpenModal => ({
  type: 'OPEN_MODAL',
  data
});

export const closeModal = (): CloseModal => ({
  type: 'CLOSE_MODAL'
});

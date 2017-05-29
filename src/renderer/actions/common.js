// @flow

// eslint-disable-next-line flowtype/no-weak-types
export const openModal = (data: Object) => ({
  type: 'OPEN_MODAL',
  data
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL'
});

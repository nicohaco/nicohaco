import reducer from '../../src/renderer/reducers/common';

describe('reducer/common', () => {
  const initialState = {
    modal: {
      data  : {},
      opened: false
    }
  };

  it('should return the initial state', () => {
    const expectedResult = initialState;

    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle OPEN_MODAL', () => {
    const data = { a: 1 };
    const expectedResult = Object.assign({}, initialState, {
      modal: {
        data,
        opened: true
      }
    });

    expect(
      reducer(undefined, {
        type: 'OPEN_MODAL',
        data
      })
    ).toEqual(expectedResult);
  });

  it('should handle CLOSE_MODAL', () => {
    const expectedResult = Object.assign({}, initialState, {
      modal: Object.assign({}, initialState.modal, {
        opened: false
      })
    });

    expect(reducer(undefined, { type: 'CLOSE_MODAL' })).toEqual(expectedResult);
  });
});

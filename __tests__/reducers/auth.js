import reducer from '../../src/renderer/reducers/auth';

describe('reducer/auth', () => {
  const initialState = {
    userData: {
      id          : -1,
      name        : '',
      session     : '',
      description : '',
      thumbnailUrl: ''
    },
    nicoInstance: null
  };

  it('should return the initial state', () => {
    const expectedResult = initialState;

    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle INSERT_NICO_INSTANCE', () => {
    const expectedResult = Object.assign({}, initialState, {
      nicoInstance: 'nico'
    });

    expect(
      reducer(undefined, {
        type   : 'INSERT_NICO_INSTANCE',
        payload: {
          nicoInstance: 'nico'
        }
      })
    ).toEqual(expectedResult);
  });

  it('should handle FETCH_USER_DATA_SUCCESS', () => {
    const userData = {
      id          : 12,
      name        : 'foo',
      session     : 'seee',
      description : 'desc',
      thumbnailUrl: 'thumb'
    };

    const expectedResult = Object.assign({}, initialState, {
      userData
    });

    expect(
      reducer(undefined, {
        type   : 'FETCH_USER_DATA_SUCCESS',
        payload: {
          userData
        }
      })
    ).toEqual(expectedResult);
  });

  it('should handle LOGIN', () => {
    expect(reducer(undefined, { type: 'LOGIN' })).toEqual(initialState);
  });

  it('should handle LOGOUT', () => {
    expect(reducer(undefined, { type: 'LOGOUT' })).toEqual(initialState);
  });

  it('should handle ROUTE_PAGE', () => {
    expect(reducer(undefined, { type: 'ROUTE_PAGE' })).toEqual(initialState);
  });

  it('should handle SHOW_USER_SESSION', () => {
    expect(reducer(undefined, { type: 'SHOW_USER_SESSION' })).toEqual(initialState);
  });

  it('should handle CRERATE_NICO_INSTANCE', () => {
    expect(reducer(undefined, { type: 'CREATE_NICO_INSTANCE' })).toEqual(initialState);
  });

  it('should handle VALIDATE_USER_SESSION', () => {
    expect(reducer(undefined, { type: 'VALIDATE_USER_SESSION' })).toEqual(initialState);
  });

  it('should handle VALIDATE_USER_SESSION_RESULT', () => {
    expect(reducer(undefined, { type: 'LOGIN' })).toEqual(initialState);
  });
});

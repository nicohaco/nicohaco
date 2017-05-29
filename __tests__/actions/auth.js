import * as actions from '../../src/renderer/actions/auth';

describe('actions/auth', () => {
  it('should create login', () => {
    const mail     = 'a@b.com';
    const password = '123';

    const expectedAction = {
      type: 'LOGIN',
      mail,
      password
    };

    expect(actions.login(mail, password)).toEqual(expectedAction);
  });

  it('should create logout', () => {
    const expectedAction = {
      type: 'LOGOUT'
    };

    expect(actions.logout()).toEqual(expectedAction);
  });

  it('should create createNicoInstance', () => {
    const session = 'se';

    const expectedAction = {
      type: 'CREATE_NICO_INSTANCE',
      session
    };

    expect(actions.createNicoInstance(session)).toEqual(expectedAction);
  });

  it('should create validateUserSession', () => {
    const expectedAction = {
      type: 'VALIDATE_USER_SESSION'
    };

    expect(actions.validateUserSession()).toEqual(expectedAction);
  });
});

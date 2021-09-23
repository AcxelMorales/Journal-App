import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en auth reducer', () => {
  test('Debe de realizar login', () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Acxel',
      },
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: 'abc',
      name: 'Acxel',
    });
  });

  test('Debe de realizar logout', () => {
    const initState = {
      uid: 'hsak89a.8sj',
      name: 'Alberto',
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  test('No debe de hacer cambios en el state', () => {
    const initState = {
      uid: 'hsak89a.8sj',
      name: 'Alberto',
    };

    const action = {
      type: 'XXX',
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});

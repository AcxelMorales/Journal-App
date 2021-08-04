import { types } from '../types/types';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123456, 'José'));
    }, 3500);
  };
};

export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });

        dispatch(login(user.uid, user.displayName));
      })
      .catch(console.log);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user: { uid, displayName } }) => {
        dispatch(login(uid, displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

import { firebase } from '../firebase/firebase-config';

import { login } from '../actions/auth';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData?.uid) {
        dispatch(login(userData.uid, userData.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Waiting...</h1>;
  }

  return (
    <>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              isLoggedIn={isLoggedIn}
              exact
              path="/auth/login"
              component={AuthRouter}
            />
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              path="/"
              component={JournalScreen}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

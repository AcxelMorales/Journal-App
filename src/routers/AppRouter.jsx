import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { Loader } from '../components/shared/loader/Loader';

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

      setTimeout(() => setChecking(false), 1000);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              isLoggedIn={isLoggedIn}
              path="/auth"
              component={AuthRouter}
            />
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              exact
              path="/"
              component={JournalScreen}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

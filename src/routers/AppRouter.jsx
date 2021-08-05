import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

import { firebase } from '../firebase/firebase-config';

import { login } from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData?.uid) {
        dispatch(login(userData.uid, userData.displayName));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route path="/" exact component={JournalScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

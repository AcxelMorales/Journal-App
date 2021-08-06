import React from 'react';
import { Provider } from 'react-redux';
import '../node_modules/animate.css';

import { store } from './store/store';

import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

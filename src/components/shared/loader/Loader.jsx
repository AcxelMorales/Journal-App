import React from 'react';

import logo from './logo.svg';

export const Loader = () => {
  return (
    <div className="loader__wrapper-main animate__animated animate__fadeIn">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Waiting...</h2>
    </div>
  );
};

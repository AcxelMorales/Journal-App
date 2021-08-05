import React from 'react';

export const Alert = ({ msjError }) => {
  return <div className="auth__error-alert">{msjError}</div>;
};

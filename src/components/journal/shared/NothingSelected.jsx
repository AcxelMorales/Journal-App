import React from 'react';

import image from './svgs/no-selected.svg';

export const NothingSelected = () => {
  return (
    <div className="nothing__main-content animate__animated animate__fadeIn">
      <img className="nothing__img-waiting" src={image} alt="svg" />
      <p>Select something or create an entry</p>
    </div>
  );
};

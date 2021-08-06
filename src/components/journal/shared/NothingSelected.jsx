import React from 'react';

import image from './svgs/no-selected.svg';

export const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <img className="nothing__img-waiting" src={image} alt="image-svg" />
      <p>Select something or create an entry</p>
    </div>
  );
};

import React from 'react';

import { SideBar } from './shared/SideBar';
import { NothingSelected } from './shared/NothingSelected';

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <SideBar />

      <main>
        <NothingSelected />
      </main>
    </div>
  );
};

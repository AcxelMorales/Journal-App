import React from 'react';

import { SideBar } from './shared/SideBar';

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <SideBar />

      <main>
        <h1>MainContent</h1>
      </main>
    </div>
  );
};

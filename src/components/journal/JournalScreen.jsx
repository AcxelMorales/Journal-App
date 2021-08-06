import React from 'react';
import { useSelector } from 'react-redux';

import { SideBar } from './shared/SideBar';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './shared/NothingSelected';

export const JournalScreen = () => {
  const { active } = useSelector(({ notes }) => notes);

  return (
    <div className="journal__main-content animate__animated animate__fadeIn">
      <SideBar />
      <main>
        {
          (active) ? <NoteScreen /> : <NothingSelected />
        }
      </main>
    </div>
  );
};

import React from 'react';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__area"
          autoComplete="off"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/01/140901154302_urano_planeta_624x351_spl.jpg"
            alt="neptune"
          />
        </div>
      </div>
    </div>
  );
};

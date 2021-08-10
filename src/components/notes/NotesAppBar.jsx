import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector(({ notes }) => notes);

  const handleOnSave = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className="notes__app-bar">
      <span>24 de Mayo de 1997</span>
      <div>
        <button className="btn">Picture</button>
        <button onClick={handleOnSave} className="btn">Save</button>
      </div>
    </div>
  );
};

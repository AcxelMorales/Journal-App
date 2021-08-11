import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector(({ notes }) => notes);

  const handleOnSave = () => dispatch(startSaveNote(active));

  const handleOnSelectPicture = () => document.querySelector('#fileSelector').click();

  const handleFileChange = ({ target: { files } }) => {
    const file = files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__app-bar">
      <span>24 de Mayo de 1997</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button onClick={handleOnSelectPicture} className="btn">
          Picture
        </button>
        <button onClick={handleOnSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote, startUploadingAct } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector(({ notes }) => notes);
  const { uploading } = useSelector(({ ui }) => ui);
  console.log(uploading);

  const handleOnSave = () => dispatch(startSaveNote(active));

  const handleOnSelectPicture = () => document.querySelector('#fileSelector').click();

  const handleFileChange = ({ target: { files } }) => {
    const file = files[0];
    if (file) {
      dispatch(startUploadingAct(file));
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
        {!uploading ? (
          <button
            onClick={handleOnSelectPicture}
            className="btn animate__animated fadeIn"
          >
            Picture
          </button>
        ) : (
          <div
            style={{ width: '0.8rem', height: '0.8rem', marginRight: '10px' }}
            className="spinner-grow text-light animate__animated fadeIn"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <button onClick={handleOnSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

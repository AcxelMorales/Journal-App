import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activeNote } from '../../actions/notes';

import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector(({ notes }) => notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const activeId = useRef(note.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={formValues.title}
          onChange={handleInputChange}
          name="title"
        />
        <textarea
          placeholder="What happened today"
          className="notes__area"
          autoComplete="off"
          value={formValues.body}
          onChange={handleInputChange}
          name="body"
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt={formValues.title} />
          </div>
        )}
      </div>
    </div>
  );
};

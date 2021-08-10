import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector(({ notes }) => notes);
  const [{ title, body }, handleInputChange, reset] = useForm(note);
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today"
          className="notes__area"
          autoComplete="off"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};

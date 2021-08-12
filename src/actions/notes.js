import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';

import { loadNotes } from '../helpers/loadNote';
import { fileUpload } from '../helpers/fileUpload';

import { types } from '../types/types';
import { finishUploading, startUploading } from './ui';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    try {
      const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
      dispatch(activeNote(docRef.id, newNote));
    } catch (error) {
      console.log('Error en new note', error);
    }
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  },
});

export const startLoadingNotes = uid => {
  return async (dispatch) => {
    try {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
    } catch (error) {
      console.log('Error in loading notes', error);
    }
  };
};

export const setNotes = notes => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = note => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) delete note.url;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    try {
      await db.doc(`/${uid}/journal/notes/${note.id}`).update(noteToFirestore);
      dispatch(refreshNote(note.id, noteToFirestore));
      Swal.fire('Saved', note.title, 'success');
    } catch (error) {
      console.log('Error in save note', error);
      Swal.fire('Error', 'Error in save note', 'error');
    }
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  },
});

export const startUploadingAct = file => {
  return async (dispatch, getState) => {
    dispatch(startUploading());

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });

    const { active:activeNote } = getState().notes;
    const fileUrl = await fileUpload(file);

    activeNote.url = fileUrl;

    Swal.close();

    dispatch(finishUploading());
    dispatch(startSaveNote(activeNote))
  };
};

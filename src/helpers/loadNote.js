import { db } from '../firebase/firebase-config';

export const loadNotes = async uid => {
  try {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesSnap.forEach(child => {
      notes.push({
        id: child.id,
        ...child.data(),
      });
    });

    return notes;
  } catch (error) {
    console.log('Error in load data');
  }
};

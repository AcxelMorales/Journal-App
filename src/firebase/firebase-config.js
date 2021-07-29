import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAUn0030dPl_60goHHInDBM-13YPF0CM_Q',
  authDomain: 'journal-app-947f0.firebaseapp.com',
  projectId: 'journal-app-947f0',
  storageBucket: 'journal-app-947f0.appspot.com',
  messagingSenderId: '632502014372',
  appId: '1:632502014372:web:901aa3cd36af295ce57131',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

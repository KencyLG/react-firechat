import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDY5A5yj3m7yOhaqdijiUZ0RcnQ0uJ_Jog",
    authDomain: "fire-chat-7c661.firebaseapp.com",
    projectId: "fire-chat-7c661",
    storageBucket: "fire-chat-7c661.appspot.com",
    messagingSenderId: "76837266147",
    appId: "1:76837266147:web:26fe146590cc1bd4239bd6",
    measurementId: "G-B6E147ZY3Z"
  };



firebase.initializeApp (firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
db,
googleAuthProvider,
firebase
}



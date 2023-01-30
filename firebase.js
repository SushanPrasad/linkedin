import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCdMs86XPGVVa-fWi9Awn2vatjOnB8MHiA",
    authDomain: "sushan-linkedin-eee.firebaseapp.com",
    projectId: "sushan-linkedin-eee",
    storageBucket: "sushan-linkedin-eee.appspot.com",
    messagingSenderId: "390977711916",
    appId: "1:390977711916:web:5c4eca07ca7ecf9956c689",
    measurementId: "G-LSEBLFVWYW"
  };


  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };

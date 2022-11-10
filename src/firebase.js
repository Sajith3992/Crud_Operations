// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/database';
import {initializeApp}  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDaaVsQLX_MUkkOzpqzSm1IEGAJcKwnTtI",
    authDomain: "react-contact-ebd2a.firebaseapp.com",
    projectId: "react-contact-ebd2a",
    storageBucket: "react-contact-ebd2a.appspot.com",
    messagingSenderId: "797047087378",
    appId: "1:797047087378:web:3a7a4a619d1749b60f53cb"
  };

  // const fireDb = firebase.initializeApp(firebaseConfig);
  const firebaseApp =  initializeApp(firebaseConfig);
  // export default fireDb.database().ref();
  export default firebaseApp;
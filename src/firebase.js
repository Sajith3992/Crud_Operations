import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDaaVsQLX_MUkkOzpqzSm1IEGAJcKwnTtI",
    authDomain: "react-contact-ebd2a.firebaseapp.com",
    projectId: "react-contact-ebd2a",
    storageBucket: "react-contact-ebd2a.appspot.com",
    messagingSenderId: "797047087378",
    appId: "1:797047087378:web:3a7a4a619d1749b60f53cb"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
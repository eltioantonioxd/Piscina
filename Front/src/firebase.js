import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR33UIquKwYQidAjTfjzHb20yntyXsK64",
    authDomain: "login-c42ee.firebaseapp.com",
    projectId: "login-c42ee",
    storageBucket: "login-c42ee.appspot.com",
    messagingSenderId: "717192459117",
    appId: "1:717192459117:web:accd8a2fd821ee9a27a064"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export { db, auth}
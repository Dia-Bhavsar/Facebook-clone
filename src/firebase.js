import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDL3_RI_jrLD-OQ0buNtLBpHrXcoOAWE2w",
  authDomain: "facebook-clone-6eb27.firebaseapp.com",
  databaseURL: "https://facebook-clone-6eb27.firebaseio.com",
  projectId: "facebook-clone-6eb27",
  storageBucket: "facebook-clone-6eb27.appspot.com",
  messagingSenderId: "125770200807",
  appId: "1:125770200807:web:e8d951ad862ec724e61442",
  measurementId: "G-H2VPTRSK9V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;


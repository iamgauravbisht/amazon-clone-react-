import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCOOb-4stilGCt6OjJq190hmm0UkmoPeY",
  authDomain: "amzone-clone-efafe.firebaseapp.com",
  projectId: "amzone-clone-efafe",
  storageBucket: "amzone-clone-efafe.appspot.com",
  messagingSenderId: "704780585946",
  appId: "1:704780585946:web:bd3817154072b881c48ee3",
  measurementId: "G-P3PMWJ4SWX",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

//TROQUE PELO SEU FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }

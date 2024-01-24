import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

//TROQUE PELO SEU FIREBASE CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyAs_fPHuGsNlTbOrYmEoat8kzTuTShnn7Y",
  authDomain: "ecommerce-template-1d6ef.firebaseapp.com",
  projectId: "ecommerce-template-1d6ef",
  storageBucket: "ecommerce-template-1d6ef.appspot.com",
  messagingSenderId: "615291422908",
  appId: "1:615291422908:web:b726290e614e912304e8b9"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }

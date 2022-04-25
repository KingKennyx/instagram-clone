import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsb0AtOpJvrkASnAi0ppV2Lq5khUIjvsw",
  authDomain: "instagram-clone-8c65e.firebaseapp.com",
  projectId: "instagram-clone-8c65e",
  storageBucket: "instagram-clone-8c65e.appspot.com",
  messagingSenderId: "1040549974719",
  appId: "1:1040549974719:web:f4b74f474188ea7a056c0a",
  measurementId: "G-127RM2QCVC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

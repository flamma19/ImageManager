import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATHU6cLjEG6Ttse12kNNUtJyEmop2-ICo",
  authDomain: "flamma19-imagemanager.firebaseapp.com",
  projectId: "flamma19-imagemanager",
  storageBucket: "flamma19-imagemanager.appspot.com",
  messagingSenderId: "102063113863",
  appId: "1:102063113863:web:e037ffca258b4220ac9a22",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };

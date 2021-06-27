//import * as firebase from "firebase/app"
//import firebase from 'firebase/app';
import firebase from 'firebase'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDn0e6_VVk7IzcGuwTw0YMtuVDze1x9XqI",
  authDomain: "vue-basic-crud.firebaseapp.com",
  projectId: "vue-basic-crud",
  storageBucket: "vue-basic-crud.appspot.com",
  messagingSenderId: "890985765254",
  appId: "1:890985765254:web:bcf7b05433f296bd39b407",
  measurementId: "G-CPGP5SH7P8"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// firebase.analytics();
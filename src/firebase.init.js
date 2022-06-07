// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl9fVcNThnIwDjLOvETQpC0pvb94BWvBM",
  authDomain: "tutor-app-saad.firebaseapp.com",
  projectId: "tutor-app-saad",
  storageBucket: "tutor-app-saad.appspot.com",
  messagingSenderId: "782812140243",
  appId: "1:782812140243:web:e707da1d293809f8f6ba26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
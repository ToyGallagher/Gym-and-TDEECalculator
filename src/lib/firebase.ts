// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7iRxocdMLWSnN_EzIaLZgRSFHdKcjL4E",
  authDomain: "toygym-84bc1.firebaseapp.com",
  projectId: "toygym-84bc1",
  storageBucket: "toygym-84bc1.firebasestorage.app",
  messagingSenderId: "879926218513",
  appId: "1:879926218513:web:5ee55a57bb223fb03286b0",
  measurementId: "G-38E1168GVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // สำหรับ Google Login
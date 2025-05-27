// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvryDIAMBzFVdjgekb5ohHJRFzkFKeYxk",
  authDomain: "fctroll-football.firebaseapp.com",
  projectId: "fctroll-football",
  storageBucket: "fctroll-football.firebasestorage.app",
  messagingSenderId: "253374039790",
  appId: "1:253374039790:web:8754fc49069b235cf855ff",
  measurementId: "G-LR11CRY0GD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

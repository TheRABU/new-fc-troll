// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjJC-ReNwYnttYt42hBtxDK7Yrm0MTAJg",
  authDomain: "fc-trollfootball.firebaseapp.com",
  projectId: "fc-trollfootball",
  storageBucket: "fc-trollfootball.firebasestorage.app",
  messagingSenderId: "540073328519",
  appId: "1:540073328519:web:d45f20c1f0859a4f135d22",
  measurementId: "G-B1MSGK1K7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

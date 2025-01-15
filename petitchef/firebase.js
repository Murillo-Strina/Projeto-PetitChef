// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2cfAps8ZDW-ZWrVerPTzJx960jP9PU7U",
  authDomain: "petitchef-d299c.firebaseapp.com",
  projectId: "petitchef-d299c",
  storageBucket: "petitchef-d299c.firebasestorage.app",
  messagingSenderId: "1015785273194",
  appId: "1:1015785273194:web:ddddbbdc677139df6e5713",
  measurementId: "G-EM6C30RDQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


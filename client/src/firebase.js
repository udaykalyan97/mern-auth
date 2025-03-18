// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a7767.firebaseapp.com",
  projectId: "mern-auth-a7767",
  storageBucket: "mern-auth-a7767.firebasestorage.app",
  messagingSenderId: "1060950761204",
  appId: "1:1060950761204:web:bcd72d5e950cc8c54908a1",
  measurementId: "G-JJLPTHDGZ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
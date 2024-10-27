// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSOxMc-45zv8JrXjISkLYW0TPwBZSThe0",
  authDomain: "authentication-3fb1a.firebaseapp.com",
  projectId: "authentication-3fb1a",
  storageBucket: "authentication-3fb1a.appspot.com",
  messagingSenderId: "387321692980",
  appId: "1:387321692980:web:0b70510b0a4e620e0e9b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


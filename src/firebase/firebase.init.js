// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SbtoDcsYVPJDs34x5lonn70IiTjiwN4",
  authDomain: "simple-firebase-c22c5.firebaseapp.com",
  projectId: "simple-firebase-c22c5",
  storageBucket: "simple-firebase-c22c5.firebasestorage.app",
  messagingSenderId: "1032982278079",
  appId: "1:1032982278079:web:c163d3f4d6f4f8560d7b0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXRpW0Yr4wFboEySDDkomWp_jMAa_-IZ4",
  authDomain: "skill-swap-4c338.firebaseapp.com",
  projectId: "skill-swap-4c338",
  storageBucket: "skill-swap-4c338.firebasestorage.app",
  messagingSenderId: "659799738951",
  appId: "1:659799738951:web:e7aa87b55e0b2a6857bf62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
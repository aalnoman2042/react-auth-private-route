// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChhB4SkoKbhiMN9VdETVMDgzihKQN6Ly8",
  authDomain: "auth-firebase-context-ta-39fe1.firebaseapp.com",
  projectId: "auth-firebase-context-ta-39fe1",
  storageBucket: "auth-firebase-context-ta-39fe1.appspot.com",
  messagingSenderId: "1045475625713",
  appId: "1:1045475625713:web:f470a47e8b3c1ebcdfb750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
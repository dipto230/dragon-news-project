// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPpqc4FmAfwrkYhGVWw10TUjlYYNHSKRo",
  authDomain: "dragon-news-portal-38bb8.firebaseapp.com",
  projectId: "dragon-news-portal-38bb8",
  storageBucket: "dragon-news-portal-38bb8.firebasestorage.app",
  messagingSenderId: "64440846651",
  appId: "1:64440846651:web:c12554ccd783bee9678f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
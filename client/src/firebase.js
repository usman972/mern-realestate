// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-635c9.firebaseapp.com",
  projectId: "real-estate-635c9",
  storageBucket: "real-estate-635c9.appspot.com",
  messagingSenderId: "859019224068",
  appId: "1:859019224068:web:325bb268f467416d88c151"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

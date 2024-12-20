// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr3aCUsKqFMNh8vqM8rK3nGQDskISlFZM",
  authDomain: "pwa-buildbizth.firebaseapp.com",
  projectId: "pwa-buildbizth",
  storageBucket: "pwa-buildbizth.firebasestorage.app",
  messagingSenderId: "936723933082",
  appId: "1:936723933082:web:9077cc5c7b3f2d58b13c23",
  measurementId: "G-5EWV4NYWKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };


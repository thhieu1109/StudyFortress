import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaC3Sx-pqnGlS1aGkyOK_0Oy3OGUHSXBg",
  authDomain: "studyfortress-42405.firebaseapp.com",
  projectId: "studyfortress-42405",
  storageBucket: "studyfortress-42405.firebasestorage.app",
  messagingSenderId: "576688554452",
  appId: "1:576688554452:web:0b79013c8c96f1108fd641",
  measurementId: "G-Q49X0XQS7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
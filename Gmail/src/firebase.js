// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDn4YbpB7RnfZUrGjxuFt8g47FX6XAcPg8",
  authDomain: "clone-bb40f.firebaseapp.com",
  projectId: "clone-bb40f",
  storageBucket: "clone-bb40f.firebasestorage.app",
  messagingSenderId: "931094673053",
  appId: "1:931094673053:web:58cf94a70bab131e808674",
  measurementId: "G-MKYVRBRSLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export const provider=new GoogleAuthProvider();
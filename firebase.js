  // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK2RqmjvLwMOh2W-T27I1FqcqgNq6Y0zQ",
  authDomain: "twitter-3387d.firebaseapp.com",
  projectId: "twitter-3387d",
  storageBucket: "twitter-3387d.appspot.com",
  messagingSenderId: "1018407925668",
  appId: "1:1018407925668:web:d3c0934b86a0aa6c9fb331",
  measurementId: "G-T81BK86TRW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
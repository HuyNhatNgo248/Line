// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFsvwOx4s8m_HY-ntvd17m_bdLiZtIVtA",
  authDomain: "line-ff1fe.firebaseapp.com",
  projectId: "line-ff1fe",
  storageBucket: "line-ff1fe.appspot.com",
  messagingSenderId: "1067234316801",
  appId: "1:1067234316801:web:cef7f694363c8d33cba600",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;

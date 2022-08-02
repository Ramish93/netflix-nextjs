// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtbCaK136uMr0wQpVyUwWIT0rV95G21Aw",
  authDomain: "netflix-clone-456e8.firebaseapp.com",
  projectId: "netflix-clone-456e8",
  storageBucket: "netflix-clone-456e8.appspot.com",
  messagingSenderId: "64273027070",
  appId: "1:64273027070:web:2771147e477a5c9c913aaf",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

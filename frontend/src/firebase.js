// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGhkSFwFUFGH1m2Vity4QauyuehZ6hnBE",
  authDomain: "tinder-clone-1e555.firebaseapp.com",
  projectId: "tinder-clone-1e555",
  storageBucket: "tinder-clone-1e555.appspot.com",
  messagingSenderId: "368408062061",
  appId: "1:368408062061:web:da762f2950a7aabb62f764",
  measurementId: "G-20CD5PYL9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
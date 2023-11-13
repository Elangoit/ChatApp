// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from"firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7YUWsL6g88qihNzZcVeEF0MIn2IWan8Y",
  authDomain: "chatapp-91e8d.firebaseapp.com",
  projectId: "chatapp-91e8d",
  storageBucket: "chatapp-91e8d.appspot.com",
  messagingSenderId: "344193849977",
  appId: "1:344193849977:web:07abe6f55fc969418cd2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
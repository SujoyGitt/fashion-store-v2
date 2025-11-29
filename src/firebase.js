// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzPUZ6YMD95hUdoLoosVSUGBsJ0J30_8",
  authDomain: "ecommercenewv2.firebaseapp.com",
  projectId: "ecommercenewv2",
  storageBucket: "ecommercenewv2.firebasestorage.app",
  messagingSenderId: "418615815205",
  appId: "1:418615815205:web:6b73b4be0a0107e68ce3cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyDOez2nQc5UmclyZckDybL-Mvacf1SGCXs",
    authDomain: "tigerbytes-bh11.firebaseapp.com",
    projectId: "tigerbytes-bh11",
    storageBucket: "tigerbytes-bh11.firebasestorage.app",
    messagingSenderId: "396359243251",
    appId: "1:396359243251:web:9766e3d9859081fdc92e86",
    measurementId: "G-SEWWVC9QX8"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const Providers = { google: new GoogleAuthProvider() };
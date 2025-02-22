// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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
export const Firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase);
export const firestore = getFirestore(Firebase);
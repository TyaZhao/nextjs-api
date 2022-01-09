// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3USBm-cwh_CpRlov_iBurOVWjo6dVzdk",
  authDomain: "xray-4db47.firebaseapp.com",
  projectId: "xray-4db47",
  storageBucket: "xray-4db47.appspot.com",
  messagingSenderId: "633056334969",
  appId: "1:633056334969:web:9d6d6eef744b0ee51f70a8",
  measurementId: "G-B22RGTEGHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);npm install -g firebase-tools

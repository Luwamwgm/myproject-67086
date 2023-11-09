// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo_5DK-LKrzSJCNzeaZu69BveD-uoXXjI",
  authDomain: "myproject-67086.firebaseapp.com",
  projectId: "myproject-67086",
  storageBucket: "myproject-67086.appspot.com",
  messagingSenderId: "1001960065696",
  appId: "1:1001960065696:web:4e0490f15caa13c99c97c5",
  measurementId: "G-M7432D32G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
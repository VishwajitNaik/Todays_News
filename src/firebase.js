import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd8fCTLaXXyW1EUBME8C7NQ0LRoP4lxxQ",
  authDomain: "news-papers-457c3.firebaseapp.com",
  projectId: "news-papers-457c3",
  storageBucket: "news-papers-457c3.appspot.com",
  messagingSenderId: "397965315457",
  appId: "1:397965315457:web:406e43d27b052349402c80",
  measurementId: "G-6J351036D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
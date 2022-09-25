import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCu1ioAhUKuXocRKwL1Wol7Ufdymgz6IPk",
  authDomain: "netflix-clone-faisal.firebaseapp.com",
  projectId: "netflix-clone-faisal",
  storageBucket: "netflix-clone-faisal.appspot.com",
  messagingSenderId: "85638843459",
  appId: "1:85638843459:web:414769a913cb143a7b58f6",
  measurementId: "G-45JDJ8C3C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

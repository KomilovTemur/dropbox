
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2uIPxEanQRwJ1qi9fUQDQxd52NSlaT68",
  authDomain: "firedrive-b2f09.firebaseapp.com",
  projectId: "firedrive-b2f09",
  storageBucket: "firedrive-b2f09.appspot.com",
  messagingSenderId: "512745461915",
  appId: "1:512745461915:web:2f2a1ab094949da1f14e3e"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBH1jbCzYIm21x8qaMYwUCyFIjjPKq0A-U",
  authDomain: "clinic-system-ca731.firebaseapp.com",
  databaseURL: "https://clinic-system-ca731-default-rtdb.firebaseio.com",
  projectId: "clinic-system-ca731",
  storageBucket: "clinic-system-ca731.firebasestorage.app",
  messagingSenderId: "302330010072",
  appId: "1:302330010072:web:4399654f603dc331bd3aad",
  measurementId: "G-DCQ3FX6GYH",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

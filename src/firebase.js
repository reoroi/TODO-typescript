import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZEjP8UJfOkxdJ0nh4tzkdpyzLdr569rQ",
  authDomain: "todo-app-typescript-abfbf.firebaseapp.com",
  projectId: "todo-app-typescript-abfbf",
  storageBucket: "todo-app-typescript-abfbf.appspot.com",
  messagingSenderId: "28033266980",
  appId: "1:28033266980:web:486f0c565751deb6e3efb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoZRDix6bNqsD_Rl1NxS4EfynZLCCtChs",
  authDomain: "fir-react-app-79884.firebaseapp.com",
  projectId: "fir-react-app-79884",
  storageBucket: "fir-react-app-79884.firebasestorage.app",
  messagingSenderId: "507388813007",
  appId: "1:507388813007:web:47c27e216f382faf95e1ba",
  measurementId: "G-3DWM3KDBDT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);

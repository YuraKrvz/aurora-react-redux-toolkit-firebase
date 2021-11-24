import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig)

export const auth = getAuth();
export const signUp = (email, password)=> {
  return createUserWithEmailAndPassword(auth, email, password);
}
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);

export default app;
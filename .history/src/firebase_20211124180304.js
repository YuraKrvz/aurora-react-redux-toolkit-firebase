import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJ6qT99OYBnPb7zIgya7CgscriuIuIaFI",
  authDomain: "i-chat-d211b.firebaseapp.com",
  projectId: "i-chat-d211b",
  storageBucket: "i-chat-d211b.appspot.com",
  messagingSenderId: "328335258977",
  appId: "1:328335258977:web:2e0cbf4dca200865580120"
};


const app = initializeApp(firebaseConfig);
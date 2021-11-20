import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEOAqOMf9GJb8moPU4ZosyWXWxJIJZzWk",
  authDomain: "chat-app-7544c.firebaseapp.com",
  projectId: "chat-app-7544c",
  storageBucket: "chat-app-7544c.appspot.com",
  messagingSenderId: "886228564455",
  appId: "1:886228564455:web:d6962b31af0a444e12a542",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;

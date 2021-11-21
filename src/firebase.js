import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBEOAqOMf9GJb8moPU4ZosyWXWxJIJZzWk",
  authDomain: "chat-app-7544c.firebaseapp.com",
  projectId: "chat-app-7544c",
  storageBucket: "chat-app-7544c.appspot.com",
  messagingSenderId: "886228564455",
  appId: "1:886228564455:web:d6962b31af0a444e12a542",
};

firebase.initializeApp(config);

export default firebase;

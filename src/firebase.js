import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

var config = {
  apiKey: "AIzaSyAAfDxf5DJE_J65rJGg8HAfoWTIviZhlPE",
  authDomain: "slack-clone-in-react.firebaseapp.com",
  projectId: "slack-clone-in-react",
  storageBucket: "slack-clone-in-react.appspot.com",
  messagingSenderId: "249889900598",
  appId: "1:249889900598:web:9868176b553dd79dd13097",
};

firebase.initializeApp(config);

export default firebase;

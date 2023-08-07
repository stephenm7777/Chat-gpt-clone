import {getApp, getApps, initializeApp} from "firebase/app"; 
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHLxtA9OhKF6mnXymtzLBY1GKYJZxdNec",
    authDomain: "chatgpt-messenger-9306c.firebaseapp.com",
    projectId: "chatgpt-messenger-9306c",
    storageBucket: "chatgpt-messenger-9306c.appspot.com",
    messagingSenderId: "866287838333",
    appId: "1:866287838333:web:03a45fc675a505b7a47d14"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  export { db }; 
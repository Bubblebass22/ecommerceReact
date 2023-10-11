import firebase from "firebase/compat/app"
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBpMgYJFtp8WXA5pf6zlp52_uEeSphBed0",
  authDomain: "dr2023-ccc67.firebaseapp.com",
  projectId: "dr2023-ccc67",
  storageBucket: "dr2023-ccc67.appspot.com",
  messagingSenderId: "1009697953816",
  appId: "1:1009697953816:web:a3d3782f2956267f0d8b6d",
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;
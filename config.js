import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAiAE2LhVxOTu09uiG_5QOYU3K1SyvPJ3k",
    authDomain: "e-ride-85a45.firebaseapp.com",
    projectId: "e-ride-85a45",
    storageBucket: "e-ride-85a45.appspot.com",
    messagingSenderId: "768023964997",
    appId: "1:768023964997:web:f5cf4b0e9b348bda72a22c"
  };

  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

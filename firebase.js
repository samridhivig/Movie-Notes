import firebase from "firebase"

  //add your firebase configurations here 
  const firebaseConfig ={
    apiKey: " ",
    authDomain: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " ",
    measurementId: " "
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;
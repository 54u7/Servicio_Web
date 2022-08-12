import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBM8YCgJrJlqeYHL7ySmOFhVoVQcbrR4L0",
    authDomain: "tarea-5-agena-react.firebaseapp.com",
    projectId: "tarea-5-agena-react",
    storageBucket: "tarea-5-agena-react.appspot.com",
    messagingSenderId: "481098713362",
    appId: "1:481098713362:web:2613d63745925d15284bcb"
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;

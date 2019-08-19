import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCu45Eai6UGhVoYR6xr6rIszIvXURpJog4",
    authDomain: "chatapp-e7aa7.firebaseapp.com",
    databaseURL: "https://chatapp-e7aa7.firebaseio.com",
    projectId: "chatapp-e7aa7",
    storageBucket: "",
    messagingSenderId: "185536239044",
    appId: "1:185536239044:web:ea500b82f02663f6"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyADP0NmqVf1YAWyuOYpzvicco_C7rfbX3I",
    authDomain: "dmtt-11d85.firebaseapp.com",
    databaseURL: "https://dmtt-11d85.firebaseio.com",
    projectId: "dmtt-11d85",
    storageBucket: "dmtt-11d85.appspot.com",
    messagingSenderId: "270736453780",
    appId: "1:270736453780:web:1b3ed5587241829d51c481",
    measurementId: "G-FG3GYGZL7J"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth}
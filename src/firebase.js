import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuXsYPLhBXfXEW30TmEKmQALrF_9Z-WB0",
    authDomain: "fir-sample-7d678.firebaseapp.com",
    projectId: "fir-sample-7d678",
    storageBucket: "fir-sample-7d678.appspot.com",
    messagingSenderId: "101975506585",
    appId: "1:101975506585:web:6cbf9cbcc6fed6d1bb4208",
    measurementId: "G-XC8PHL6X57"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();

// データに関してしたいことは、フォーム→データの追加
// データを表示
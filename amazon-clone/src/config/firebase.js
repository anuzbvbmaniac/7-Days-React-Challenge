import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_RtvP_9SN4JmvVz-HJzrZVvLZhgz-2ek",
    authDomain: "clone-426e4.firebaseapp.com",
    databaseURL: "https://clone-426e4.firebaseio.com",
    projectId: "clone-426e4",
    storageBucket: "clone-426e4.appspot.com",
    messagingSenderId: "61526492915",
    appId: "1:61526492915:web:95929d5175417a3de5d986"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


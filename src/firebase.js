import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4WCD41OKMTlcQ3p_FLZSi6MpQNLSSG30",
    authDomain: "slack-clone-12345.firebaseapp.com",
    projectId: "slack-clone-12345",
    storageBucket: "slack-clone-12345.appspot.com",
    messagingSenderId: "2499970744",
    appId: "1:2499970744:web:494fc10a97e96c2fe9964d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider }
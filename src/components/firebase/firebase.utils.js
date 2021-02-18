import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAG71x6ofgmuqjWPYeVxurka3Px1KzsO0Y",
  authDomain: "crwn-db-583d5.firebaseapp.com",
  projectId: "crwn-db-583d5",
  storageBucket: "crwn-db-583d5.appspot.com",
  messagingSenderId: "589576507621",
  appId: "1:589576507621:web:4f3e0807ebeccc73e9040c",
  measurementId: "G-ZDKNTFFXVC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
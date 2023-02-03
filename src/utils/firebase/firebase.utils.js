import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXmYN5PwEu-oPan96bhHCroAW7-vhxh3k",
  authDomain: "crown-v2-4dfe9.firebaseapp.com",
  projectId: "crown-v2-4dfe9",
  storageBucket: "crown-v2-4dfe9.appspot.com",
  messagingSenderId: "482995967946",
  appId: "1:482995967946:web:29b82fe58683d9896f2133"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"

});

export const auth = getAuth();
export const signInWithGooglePopup =  () => signInWithPopup(auth,provider);
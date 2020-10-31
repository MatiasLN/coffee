import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD26XUmLKds2rS-ONbGjbXC80kHpa0mAxk",
  authDomain: "covfefe-4e9ea.firebaseapp.com",
  databaseURL: "https://covfefe-4e9ea.firebaseio.com",
  projectId: "covfefe-4e9ea",
  storageBucket: "covfefe-4e9ea.appspot.com",
  messagingSenderId: "1015333247439",
  appId: "1:1015333247439:web:903c647f24fac151355aba",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const provider = new firebase.auth.GoogleAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { projectStorage, projectFirestore, provider, timestamp };

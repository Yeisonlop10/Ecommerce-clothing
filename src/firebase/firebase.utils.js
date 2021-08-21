import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWm2Pbnj2dLI9FMgoYokhWVVFq-eS8D4Y",
    authDomain: "crwn-db-e797d.firebaseapp.com",
    projectId: "crwn-db-e797d",
    storageBucket: "crwn-db-e797d.appspot.com",
    messagingSenderId: "834587749973",
    appId: "1:834587749973:web:f5afb2b8856638946e6edc",
    measurementId: "G-YPYH79FR3V"
  };

firebase.initializeApp(config);

export const auth = firebase.auth(); // export anything related to authentication
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider(); // Access to the googleauthprovider class
//provider.setCustomParameters({ prompt: 'select_account' }); // Always the google popup when using this provider for google authentication

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((err) =>{
        console.log(err.message)
    })
}// this takes in the provider(google), but, there are more providers like twitter

export default firebase;


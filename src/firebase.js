import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjLupamzskyzHQURjxkZmGpa8jSY40OCE",
  authDomain: "ecomm-9d577.firebaseapp.com",
  projectId: "ecomm-9d577",
  storageBucket: "ecomm-9d577.appspot.com",
  messagingSenderId: "1080529739920",
  appId: "1:1080529739920:web:111a790ca253d298d87815",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider();

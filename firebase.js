import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCDWnur4dhVEktVdBF_KRGho_RzS-Fd6YE",
  authDomain: "whatsapp-2-b2245.firebaseapp.com",
  projectId: "whatsapp-2-b2245",
  storageBucket: "whatsapp-2-b2245.appspot.com",
  messagingSenderId: "80053404819",
  appId: "1:80053404819:web:35ea3ccf451b9489edb966",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARZYXPE_Mnfhk9XCFU2iRgCF90tRWRhbs",
  authDomain: "whatsapp-nextjs-24acd.firebaseapp.com",
  projectId: "whatsapp-nextjs-24acd",
  storageBucket: "whatsapp-nextjs-24acd.appspot.com",
  messagingSenderId: "707716016857",
  appId: "1:707716016857:web:a1af653868472c55b12cc8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

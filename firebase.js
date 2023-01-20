import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARZYXPE_Mnfhk9XCFU2iRgCF90tRWRhbs",
  authDomain: "whatsapp-nextjs-24acd.firebaseapp.com",
  projectId: "whatsapp-nextjs-24acd",
  storageBucket: "whatsapp-nextjs-24acd.appspot.com",
  messagingSenderId: "707716016857",
  appId: "1:707716016857:web:a1af653868472c55b12cc8",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApps();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

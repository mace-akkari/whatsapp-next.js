import Login from "./login";
import Loading from "../components/Loading";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useEffect } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const document = doc(db, `users/${user.uid}`);
      setDoc(
        document,
        {
          email: user.email,
          lastSeen: Timestamp.now(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;

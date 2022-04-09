import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const singhnInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };

  //   return [user, setUser];
  return { user, setUser, handleSignOut, singhnInWithGoogle };
};

export default useFirebase;

import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  async function signUp(email, password) {
    let result = "Success";
    await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            result = `Email address ${email} already in use.`;

            break;
          case "auth/invalid-email":
            result = `Email address ${email} is invalid.`;

            break;
          case "auth/operation-not-allowed":
            result = `Error during sign up.`;

            break;
          case "auth/weak-password":
            result =
              "Password is not strong enough. Add additional characters including special characters and numbers.";
            break;
          default:
            result = error.message;
            break;
        }
      })
      .finally(() => {
        if (result == "Success") {
          setDoc(doc(db, "users", email), {
            savedShows: [],
          });
        }
      });
    return result;
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}

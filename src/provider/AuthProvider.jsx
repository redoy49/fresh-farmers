import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";
// eikhane setsucces setrror state er kono  use nai karon ami toast use korsi

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user, loading);

  const handleRegister = (name, email, password, photoUrl) => {
    console.log(email, password);
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User sign up successful!", user);

        const profile = {
          displayName: name,
          photoURL: photoUrl,
        };

        updateProfile(auth.currentUser, profile)
          .then(() => {
            toast.success("User profile update successfull!");
          })
          .catch((error) => {
            console.log(error);
          });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        console.log(currentUser);
        toast.success("User sign in successful!", user);
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  const handleLogout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        toast.success("Log out successfull!");
      })
      .catch(() => {
        toast.error("Log out error!");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        // const uid = currentUser.uid;
      } else {
        // User is signed out
      }
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authData = {
    user,
    loading,
    setLoading,
    setUser,
    handleRegister,
    handleLogin,
    googleLogin,
    handleLogout,
  };

  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

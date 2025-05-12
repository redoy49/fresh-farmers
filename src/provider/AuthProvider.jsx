import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    console.log(email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        toast.success("User Log in successful!", user);
      })
      .catch((error) => {
        toast.error("User Log in error!", error);
      });
  };

  const passwordForget = (forgetEmail) => {
    return sendPasswordResetEmail(auth, forgetEmail);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        toast.success("User Log out succesfull!");
      })
      .catch(() => {
        toast.error("User Log out error!");
      });
  };

  const manageProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    return updateProfile(auth.currentUser, profile)
      .then(() => {
        const userUpdate = {
          ...auth.currentUser,
          displayName: name,
          photoURL: photoURL,
        };
        setUser(userUpdate);
        toast.success("Save user info succesfull!");
      })
      .catch(() => {
        toast.error("Upate user info fail");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
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
    manageProfile,
    passwordForget,
  };

  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

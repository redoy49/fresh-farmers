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

  const handleRegister = (name, email, password, photoUrl) => {
    console.log(email, password);
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        toast.success("User Register successful!");

        const profile = {
          displayName: name,
          photoURL: photoUrl,
        };

        updateProfile(auth.currentUser, profile)
          .then(() => {
            setUser(...user, ...profile);
            toast.success("User profile update successfull!");
          })
          .catch((error) => {
            toast.error("User profile update error!", error);
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
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Google Login successfull!");
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

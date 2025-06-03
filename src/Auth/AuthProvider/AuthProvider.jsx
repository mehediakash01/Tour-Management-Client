import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();
  // createUser

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login existing user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   continue with google
  const continueWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  //   updateUser profile

  const updateUser = (moreInfo) => {
    return updateProfile(auth.currentUser, moreInfo)
      
  };

  // set  observer for

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    createUser,
    loginUser,
    user,
    setUser,
    loading,
    setLoading,
    continueWithGoogle,
    updateUser
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

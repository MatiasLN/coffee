import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase/config";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName, email, photoURL, uid } = user;
      setUser({
        displayName,
        email,
        photoURL,
        uid,
      });
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

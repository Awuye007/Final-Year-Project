import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../core/firebase";
const storageService = require("../core/storage");

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  logout: () => {},
  login: async (email, password) => {},
  isLoggedIn: () => {
    return !!storageService.getUser() && !!storageService.getAccessToken();
  },
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      let savedUser = await storageService.getUser();
      if (savedUser) {
        setUser(savedUser);
      }
    })();
  }, []);

  useEffect(() => {
    const updateUserInStorage = () => {
      storageService.setUser(user);
    };

    if (user !== null) {
      updateUserInStorage();
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    storageService.clearStorage();
    signOut(auth);
  };

  const login = async (email, password) => {
    try {
      const authResp = await signInWithEmailAndPassword(auth, email, password);
      const resp = await getDocs(collection(db, "users"));
      const user = resp.docs.find(
        (doc) => doc.data().email === authResp.user.email
      );
      const accessToken = await authResp.user.getIdToken();
      storageService.setAccessToken(accessToken);
      storageService.setUser({ ...user.data(), id: user.id });
      setUser({ ...user.data(), id: user.id });
      return user;
    } catch (error) {
      throw error;
    }
  };

  const isLoggedIn = () => {
    return !!storageService.getUser() && !!storageService.getAccessToken();
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

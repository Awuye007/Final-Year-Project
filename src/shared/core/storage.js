import SecureStorage from "secure-web-storage";
import CryptoJs from "crypto-js";
import { ACCESS_TOKEN, REFRESH_TOKEN, USER } from "./variables";

const secureStorage = new SecureStorage(localStorage, {
  hash: function hash(key) {
    key = CryptoJs.SHA256(key);
    return key.toString();
  },

  encrypt: function encrypt(data) {
    data = CryptoJs.AES.encrypt(data, process.env.REACT_APP_SECRET_KEY);
    data = data.toString();
    return data;
  },

  decrypt: function decrypt(data) {
    data = CryptoJs.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
    data = data.toString(CryptoJs.enc.Utf8);
    return data;
  },
});

const setAccessToken = (accessToken) => {
  try {
    secureStorage.setItem(ACCESS_TOKEN, accessToken);
  } catch (error) {
    console.error("Error setting access token:", error);
  }
};

const getAccessToken = () => {
  try {
    return secureStorage.getItem(ACCESS_TOKEN);
  } catch (error) {
    console.error("Error getting access token:", error);
  }
};

const removeAccessToken = () => {
  try {
    secureStorage.removeItem(ACCESS_TOKEN);
  } catch (error) {
    console.error("Error removing access token:", error);
  }
};

const setRefreshToken = (refreshToken) => {
  try {
    secureStorage.setItem(REFRESH_TOKEN, refreshToken);
  } catch (error) {
    console.error("Error setting refresh token:", error);
  }
};

const getRefreshToken = () => {
  try {
    return secureStorage.getItem(REFRESH_TOKEN);
  } catch (error) {
    console.error("Error getting refresh token:", error);
  }
};

const removeRefreshToken = () => {
  try {
    secureStorage.removeItem(REFRESH_TOKEN);
  } catch (error) {
    console.error("Error removing refresh token:", error);
  }
};

const setUser = (user) => {
  try {
    secureStorage.setItem(USER, user);
  } catch (error) {
    console.error("Error setting user:", error);
  }
};

const getUser = () => {
  try {
    return secureStorage.getItem(USER);
  } catch (error) {
    console.error("Error getting user:", error);
  }
};

const removeUser = () => {
  try {
    secureStorage.removeItem(USER);
  } catch (error) {
    console.error("Error removing user:", error);
  }
};

const clearStorage = () => {
  try {
    secureStorage.clear();
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
};

export {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  setUser,
  getUser,
  removeUser,
  clearStorage,
};

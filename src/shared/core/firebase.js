// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Xo6pTTm2IpQ-VCmH9uigsZlVMk2ey7A",
  authDomain: "liv-app-3b10b.firebaseapp.com",
  projectId: "liv-app-3b10b",
  storageBucket: "liv-app-3b10b.appspot.com",
  messagingSenderId: "379343378996",
  appId: "1:379343378996:web:060ef9bb82b2b0ef5b8861",
  measurementId: "G-VL7FK2HLL4",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };

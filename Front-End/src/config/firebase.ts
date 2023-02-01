// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB47oSgE1VUx1VNExeACcTQgFhv0sr7PRY",
  authDomain: "poojaarchana-78e2e.firebaseapp.com",
  projectId: "poojaarchana-78e2e",
  storageBucket: "poojaarchana-78e2e.appspot.com",
  messagingSenderId: "486334579918",
  appId: "1:486334579918:web:d02b03bc77a9c071267c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
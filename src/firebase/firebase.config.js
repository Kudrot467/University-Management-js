// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Rf7dHPdB2I2SGNN5ECzO4Hx4fEfJLSc",
  authDomain: "event-management-b51f5.firebaseapp.com",
  projectId: "event-management-b51f5",
  storageBucket: "event-management-b51f5.appspot.com",
  messagingSenderId: "1078069027713",
  appId: "1:1078069027713:web:1598d0804910703bc97e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
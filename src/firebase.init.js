// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCec58_N7HRhaWlfbWwREFIRTrgGz7TPHM",
  authDomain: "bpp-shops-79f54.firebaseapp.com",
  projectId: "bpp-shops-79f54",
  storageBucket: "bpp-shops-79f54.appspot.com",
  messagingSenderId: "354013310760",
  appId: "1:354013310760:web:f468ff871b4ab00ca42a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE34iFmkGrfi6mztlcTI4D7eWqqyYkg88",
  authDomain: "instagram-3f27d.firebaseapp.com",
  projectId: "instagram-3f27d",
  storageBucket: "instagram-3f27d.appspot.com",
  messagingSenderId: "181892455625",
  appId: "1:181892455625:web:358b0f182696baf9cd0118"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

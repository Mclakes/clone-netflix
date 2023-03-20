import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3UlK0cf_cI4NUzzqoHpNzt78Bs4S23n8",
  authDomain: "react-netflix-clone-e398d.firebaseapp.com",
  projectId: "react-netflix-clone-e398d",
  storageBucket: "react-netflix-clone-e398d.appspot.com",
  messagingSenderId: "706583781024",
  appId: "1:706583781024:web:3591b96aad5d0a951933c5",
  measurementId: "G-T3B03MJXWQ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

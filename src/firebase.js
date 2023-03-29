import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYigHCZtgnZjZkW5T6-riX0sgkqoaYo5c",
  authDomain: "todo-e579c.firebaseapp.com",
  databaseURL: "https://todo-e579c-default-rtdb.firebaseio.com",
  projectId: "todo-e579c",
  storageBucket: "todo-e579c.appspot.com",
  messagingSenderId: "208970329950",
  appId: "1:208970329950:web:29161fa79c3845ec14a9cf",
  measurementId: "G-62L72B5HTH"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();

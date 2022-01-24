import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEL7ORqPtS31-XAi-ZSlWLau36rN2TiVs",
  authDomain: "blog-7ed61.firebaseapp.com",
  projectId: "blog-7ed61",
  storageBucket: "blog-7ed61.appspot.com",
  messagingSenderId: "926810118141",
  appId: "1:926810118141:web:6a22202c08252ce747eb94"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app, db}
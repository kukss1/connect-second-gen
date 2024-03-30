import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOWjfuR-Hoa1MIc8Xdb5b6laWpR6P7VuE",
  authDomain: "test1662.firebaseapp.com",
  projectId: "test1662",
  storageBucket: "test1662.appspot.com",
  messagingSenderId: "376205764382",
  appId: "1:376205764382:web:b45e025eb556bc0daecb0f",
  measurementId: "G-4BHKFKP729",
};

const FireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FireBaseApp);

export { FireBaseApp, db };

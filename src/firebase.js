
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6UzjI_InbQhMsmq8qfKlHrOZc4NfpDeU",
  authDomain: "spicenest-e77c2.firebaseapp.com",
  projectId: "spicenest-e77c2",
  storageBucket: "spicenest-e77c2.firebasestorage.app",
  messagingSenderId: "1006069820003",
  appId: "1:1006069820003:web:9a61a061d588280e976656",
  measurementId: "G-XJDWV35BCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app)
 const auth = getAuth(app)
 export {db,auth,app}
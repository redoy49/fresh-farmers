import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKjieAihU8UBF8PesA82YmHSkqYGAQ_Ls",
  authDomain: "subscription-box-df504.firebaseapp.com",
  projectId: "subscription-box-df504",
  storageBucket: "subscription-box-df504.firebasestorage.app",
  messagingSenderId: "1037140498584",
  appId: "1:1037140498584:web:7fc9703186f1524fdd18ed",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

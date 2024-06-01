import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// console.log(import.meta.env.Vite_apiKey);

const firebaseConfig = {
  apiKey: "AIzaSyBiEE19yRK2q4GIj7kxKhA7IksoIHtm2Us",
  authDomain: "eduharmony-d6114.firebaseapp.com",
  projectId: "eduharmony-d6114",
  storageBucket: "eduharmony-d6114.appspot.com",
  messagingSenderId: "991966144321",
  appId: "1:991966144321:web:e3546d7e8cf8de606ce3c0",
  measurementId: "G-FLCVQE87QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

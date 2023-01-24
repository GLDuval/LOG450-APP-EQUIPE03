import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmfnHXJDc9G_wE9xbKiInxKjR9VjTzhBQ",
    authDomain: "log450-fc8b3.firebaseapp.com",
    projectId: "log450-fc8b3",
    storageBucket: "log450-fc8b3.appspot.com",
    messagingSenderId: "71180759232",
    appId: "1:71180759232:web:7b7581b1e3462962f1bd25",
    measurementId: "G-Y7QRX9NYBZ"  
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
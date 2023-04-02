import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const webClientID =
  '410375834279-97l6bvj1346a5krttagsuvi3hjsr2v7i.apps.googleusercontent.com';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCmfnHXJDc9G_wE9xbKiInxKjR9VjTzhBQ',
  authDomain: 'log450-fc8b3.firebaseapp.com',
  projectId: 'log450-fc8b3',
  storageBucket: 'log450-fc8b3.appspot.com',
  messagingSenderId: '71180759232',
  appId: '1:71180759232:web:7b7581b1e3462962f1bd25',
  measurementId: 'G-Y7QRX9NYBZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  persistence: browserLocalPersistence,
});
export const auth = getAuth(app);
export const db = getFirestore(app);

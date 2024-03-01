import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDIsxmiMhoyZ9iGQTffyKLTyF6Fhwrcuno',
  authDomain: 'share-a-secret-52cbf.firebaseapp.com',
  projectId: 'share-a-secret-52cbf',
  storageBucket: 'share-a-secret-52cbf.appspot.com',
  messagingSenderId: '168611533100',
  appId: '1:168611533100:web:405d77d95fc5b6e2ba1c89',
  measurementId: 'G-22W9MM5R1N',
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

// export const auth = app.auth();

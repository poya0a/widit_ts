import { getApp, getApps, initializeApp } from "firebase/app";

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FB_API_KEY,
      authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MESSAGE_ID,
      appId: process.env.REACT_APP_FB_APP_ID,
      measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
    };

export const firebaseAuth = !getApps().length ? initializeApp(firebaseConfig) : getApp();
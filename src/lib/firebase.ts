import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Prefer environment variables. If you want to use the raw config you sent,
// these values are used as fallbacks for quick testing (not recommended for public repos).
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyBvBlbWmFxN1t0Sv0TkWfcYndvgzq6499Y",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "edu-platform-35476.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "edu-platform-35476",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "edu-platform-35476.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "823570222456",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "1:823570222456:web:656afb19407d955448cc8d",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-V7DZRJR57F",
};

let app: FirebaseApp | undefined;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  // If already initialized, reuse the existing app
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional helper: export the raw config (useful for debugging)
export { firebaseConfig };

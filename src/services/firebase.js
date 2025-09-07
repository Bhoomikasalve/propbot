import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuration with fallback values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDtyf01QExns4C8qShiw2AH_Ur0I8BdLYc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "real-estate-app-b654d.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "real-estate-app-b654d",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "real-estate-app-b654d.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "728110698743",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:728110698743:web:f280b43d78e8ff1684c3f2",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-L01QY6ZK04"
};

// Extract measurementId with underscore prefix to indicate intentional non-use
const { measurementId: _measurementId, ...configWithoutMeasurement } = firebaseConfig;

// Debug output
console.log('Firebase Config Loaded:', {
  apiKey: firebaseConfig.apiKey ? '✅ Present' : '❌ Missing',
  authDomain: firebaseConfig.authDomain ? '✅ Present' : '❌ Missing',
  projectId: firebaseConfig.projectId ? '✅ Present' : '❌ Missing'
});

let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  // Fallback: try without measurementId
  try {
    app = initializeApp(configWithoutMeasurement);
    auth = getAuth(app);
    console.log('✅ Firebase initialized without measurementId');
  } catch (fallbackError) {
    console.error('❌ Firebase fallback initialization also failed:', fallbackError);
    throw new Error('Firebase initialization failed completely');
  }
}

export { auth };
export default app;
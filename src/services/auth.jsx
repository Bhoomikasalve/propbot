import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from './firebase';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if Firebase auth is available
  if (!auth) {
    console.error('Firebase Auth is not available');
  }

  function signup(email, password) {
    if (!auth) {
      return Promise.reject(new Error('Firebase Auth is not initialized'));
    }
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    if (!auth) {
      return Promise.reject(new Error('Firebase Auth is not initialized'));
    }
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    if (!auth) {
      return Promise.reject(new Error('Firebase Auth is not initialized'));
    }
    return signOut(auth);
  }

  useEffect(() => {
    if (!auth) {
      setError('Firebase Auth not available');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      setError(null);
    }, (error) => {
      console.error('Auth state change error:', error);
      setError(error.message);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    error
  };

  // Return without JSX - using React.createElement instead
  return React.createElement(
    AuthContext.Provider,
    { value: value },
    !loading && children
  );
}
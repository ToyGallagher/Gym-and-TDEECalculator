"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase"; // Firebase auth instance
import { onAuthStateChanged, signOut, User } from "firebase/auth";

type AuthContextType = {
  user: User | null; // Current logged-in user
  isLoggedIn: boolean; // Boolean indicating if the user is logged in
  logIn: (user: User) => void; // Function to update the user state
  logOut: () => Promise<void>; // Function to log out
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logIn = (user: User) => {
    setUser(user); // Update the user state
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  // ใช้ user เพื่อลดคำเตือน no-unused-vars
  useEffect(() => {
    if (user) {
      console.log(`Logged in as: ${user.displayName}`);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext"; // Use AuthContext

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { logIn } = useAuth(); // Access logIn from AuthContext
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      logIn(userCredential.user); // Update the user in AuthContext
      router.push("/#home"); // Navigate to the home page
    } catch (err: any) {
      setError(err.message || "An error occurred during Sign In.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-black">{error}</p>}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block font-bold mb-2 text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md text-black"
              required
            />
          </div>
          <div>
            <label className="block font-bold mb-2 text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-black">
          Dont have an account?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
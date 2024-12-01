"use client";

import React from "react";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <nav className="fixed w-full bg-gray-900 text-gray-200 py-4 px-8 flex items-center shadow-lg">
      {/* Centered Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm tracking-wider">
        <Link href="/#home" className="hover:text-orange-500">
          HOME
        </Link>
        <Link href="/#about" className="hover:text-orange-500">
          ABOUT
        </Link>
        <Link href="/#studio" className="hover:text-orange-500">
          THE STUDIO
        </Link>
        <Link href="/tdee" className="hover:text-orange-500">
          TDEE
        </Link>
      </div>

      {/* Login and Cart */}
      <div className="ml-auto flex items-center space-x-10">
        {isLoggedIn ? (
          <button
            onClick={logOut}
            className="text-orange-500 hover:text-white"
          >
            Log Out
          </button>
        ) : (
          <Link href="/signin" className="text-orange-500 hover:text-white">
            Log In
          </Link>
        )}
        <Link href="/mycart" className="relative text-orange-500 hover:text-white">
          <FaShoppingBag className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Link>
      </div>
    </nav>
  );
}
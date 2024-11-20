// src/app/components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaShoppingBag } from 'react-icons/fa';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="fixed w-full bg-gray-900 text-gray-200 py-4 px-8 flex justify-center items-center shadow-lg">
      <div className="flex space-x-6 text-sm tracking-wider">
        <Link href="/#home" className="hover:text-orange-500">HOME</Link>
        <Link href="/#about" className="hover:text-orange-500">ABOUT</Link>
        <Link href="/#studio" className="hover:text-orange-500">THE STUDIO</Link>
        <Link href="/tdee" className="hover:text-orange-500">TDEE</Link>
        <Link href="/book" className="hover:text-orange-500">BOOK ONLINE</Link>
        <Link href="/pricing" className="hover:text-orange-500">PLANS & PRICING</Link>
        <Link href="/challenges" className="hover:text-orange-500">CHALLENGES</Link>
        <Link href="/contact" className="hover:text-orange-500">CONTACT</Link>
      </div>
      <div className="flex items-center ml-14 space-x-10">
        <Link href="/login" className="text-orange-500 hover:text-white">Log In</Link>
        <Link href="/profile" className="text-orange-500 hover:text-white">
          <FaUser className="w-6 h-6" /> {/* Profile Icon */}
        </Link>
        <Link href="/cart" className="relative text-orange-500 hover:text-white">
          <FaShoppingBag className="w-6 h-6" /> {/* Cart Icon */}
          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}
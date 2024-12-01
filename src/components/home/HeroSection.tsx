// src/app/components/HeroSection.tsx
import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[url('/gymblack.jpeg')] bg-cover bg-center">
      <h1 className="text-4xl font-bold tracking-wide">T_YGALLAGHER</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        TRAINING WITH A WORLD CHAMPION
      </p>
      <Link href="/tdee" >
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Get Started (tdee)
        </button>
      </Link>
    
    </div>
  );
}
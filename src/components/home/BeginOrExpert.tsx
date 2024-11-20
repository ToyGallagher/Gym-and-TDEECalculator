// src/app/components/DoubleBackgroundSection.tsx
import React from 'react';
import Link from 'next/link';

export default function BeginOrExpert() {
  return (
    <div className="flex w-full h-[100vh]">
    {/* ส่วนซ้าย (BEGINNERS) */}
    <div className="relative flex-1 bg-[url('/gymbeginer.jpeg')] bg-cover bg-top bg-no-repeat">
      <Link href="/book/Beginner">
        <div className="absolute inset-0 bg-transparent hover:bg-gray-900 hover:bg-opacity-80 transition duration-300 cursor-pointer">
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold tracking-widest text-white">BEGINNERS</h1>
          </div>
        </div>
      </Link>
    </div>

      {/* ส่วนขวา */}
      <div
        className="relative flex-1 bg-[url('/cbum.jpeg')] bg-cover bg-top bg-no-repeat"
      >
        <Link href="/book/Professional">
        <div className="absolute inset-0 bg-transparent hover:bg-gray-900 hover:bg-opacity-80 transition duration-300">
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold tracking-widest">PROFESSIONALS</h1>
            </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
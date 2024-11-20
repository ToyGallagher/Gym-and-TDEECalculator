// src/app/page.tsx
import React from 'react';
import HeroSection from 'components/home/HeroSection';
import BeginOrExpert from 'components/home/BeginOrExpert';
import About from 'components/home/About';
import TheStudio from 'components/home/TheStudio';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BeginOrExpert />
      <About/>
      <TheStudio/>
    </>
  );
}
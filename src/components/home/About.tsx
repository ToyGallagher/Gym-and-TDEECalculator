// src/app/components/home/About.tsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="flex h-screen bg-[url('/Sam.jpeg')] bg-cover bg-center text-white">
      {/* ส่วนข้อความ */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">MEET THE COACH</h1>
        <p className="text-lg mb-4">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <p className="text-lg">
          This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
        </p>
      </div>

      {/* ส่วนภาพ */}
      <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        {/* ใช้ path ของรูปภาพที่ต้องการแทน '/path-to-your-image.jpg' */}
      </div>
    </section>
  );
}
// src/app/components/Studio.tsx
import React from 'react';

export default function Studio() {
  return (
    <section id="studio" className="flex h-screen bg-[url('/cbumdino.jpeg')] bg-cover bg-center text-white">
      <div className="w-full flex flex-col items-center justify-center text-center p-12 bg-black bg-opacity-50">
        {/* หัวข้อ */}
        <h1 className="text-5xl font-bold mb-6">THE STUDIO</h1>
        <p className="text-lg max-w-xl mx-auto mb-8">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id sapiente, tempora totam esse dolore architecto corrupti in quasi fugit necessitatibus exercitationem ab quo. Distinctio dolore nobis enim nesciunt iure.
        </p>

        {/* ข้อมูล ADDRESS และ HOURS */}
        <div className="flex space-x-12">
          {/* ที่อยู่ */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">ADDRESS</h2>
            <p>BANGKOK THAILAND</p>
            <p>PINKLAO 10700</p>
          </div>

          {/* ชั่วโมงการทำงาน */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">HOURS</h2>
            <p>MONDAY - SUNDAY</p>
            <p>6:30AM - 12.00PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
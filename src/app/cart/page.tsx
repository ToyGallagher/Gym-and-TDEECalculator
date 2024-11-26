"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CartPage() {
  // ใช้ Suspense เพื่อรองรับการทำงานแบบ Client Side Rendering (CSR)
  return (
    <Suspense fallback={<p className="text-center text-white">Loading cart...</p>}>
      <CartContent />
    </Suspense>
  );
}

function CartContent() {
  const searchParams = useSearchParams();
  const items = JSON.parse(searchParams?.get("items") || "[]");

  return (
    <div className="p-6 bg-black min-h-screen items-center justify-center pt-20 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: { id: string; image: string; title: string; description: string; price: number }) => (
            <div
              key={item.id}
              className="p-4 bg-gray-900 shadow-md rounded-lg flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[150px] mb-4"
              />
              <h2 className="text-lg font-semibold text-center text-white">{item.title}</h2>
              <p className="text-white text-sm text-center mb-2">
                {item.description.length > 50
                  ? `${item.description.substring(0, 50)}...`
                  : item.description}
              </p>
              <p className="text-blue-500 font-bold text-center">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
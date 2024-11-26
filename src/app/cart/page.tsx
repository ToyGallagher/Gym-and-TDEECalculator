"use client";

import { useSearchParams } from "next/navigation";

export default function CartPage() {
  const searchParams = useSearchParams();
  const items = JSON.parse(searchParams?.get("items") || "[]");

  return (
    <div className="p-6 bg-black min-h-screen items-center justify-center pt-20 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="p-4 bg-gray-900 shadow-md rounded-lg flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[150px] mb-4"
              />
              <h2 className="text-lg font-semibold text-center">{item.title}</h2>
              <p className="text-white text-sm text-center mb-2">
                {item.description}
              </p>
              <p className="text-blue-500 font-bold text-center">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
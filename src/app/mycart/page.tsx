"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<any[]>([]); // State for managing the cart
  const router = useRouter();

  // Fetch products from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add product to the cart
  const handleAddToCart = (product: any) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, product]); // Add unique products
    }
  };

  // Navigate to the cart page
  const handleViewCart = () => {
    const queryString = new URLSearchParams({ items: JSON.stringify(cart) }).toString();
    router.push(`/cart?${queryString}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-black min-h-screen items-center justify-center pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-gray-900 shadow-md rounded-lg flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={150} // กำหนดความกว้าง
              height={150} // กำหนดความสูง
              className="mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{product.title}</h2>
            <p className="text-white text-sm text-center mb-2">
              {product.description.length > 50
                ? `${product.description.substring(0, 50)}...`
                : product.description}
            </p>
            <p className="text-blue-500 font-bold text-center">${product.price}</p>
            <p className="text-sm text-white text-center">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleViewCart}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          View Cart ({cart.length})
        </button>
      </div>
    </div>
  );
}
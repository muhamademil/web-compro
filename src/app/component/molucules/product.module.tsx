"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getProducts, IProduct } from "@/lib/products/product";

interface ProductListProps {
  limit?: number;
  category?: string;
}

export default function ProductList({ limit, category }: ProductListProps) {
  const [products, setproducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(limit, category);
      setproducts(data);
    };
    fetchProducts();
  }, [limit, category]);

  console.log("data -> ", products);

  return (
    <div className="container mx-auto p-5">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card bg-white flex flex-col rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
            >
              <img
                className="w-full h-48 object-cover rounded-t-md mb-4"
                src={product.imageUrl}
                alt={product.title}
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <p className="text-gray-700 mt-2 text-sm">
                {product.description}
              </p>
              <p className="text-lg font-bold text-blue-600 mt-4">
                {product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-pink-800 font-semibold">
          No Products Available
        </p>
      )}
    </div>
  );
}

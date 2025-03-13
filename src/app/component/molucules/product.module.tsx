"use client";
import React, { useState, useEffect } from "react";
import { getProducts, IProduct } from "@/lib/products/product";
import Image from "next/image";

interface ProductListProps {
  limit?: number;
  category?: string;
}

export default function ProductList({ limit, category }: ProductListProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(limit, category);
      setProducts(data);
    };
    fetchProducts();
  }, [limit, category]);

  // Kategori Manual (Bisa dinamis kalau mau)
  const categories = [
    "all",
    "Furniture",
    "Interior Design",
    "Office",
    "Living Room",
  ];

  // Filter Produk
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto p-5">
      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Dropdown Kategori */}
        <select
          className="w-full sm:w-60 p-3 rounded-md
               bg-gray-800 text-white font-medium
               border-2 border-gray-800
               focus:outline-none focus:ring-1 focus:ring-white focus:border-white
               hover:bg-slate-300 transition-colors duration-300"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat} className="text-white">
              {cat}
            </option>
          ))}
        </select>

        {/* Input Search */}
        <input
          type="text"
          placeholder="Search product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-60 p-3 rounded-md
               bg-gray-800 text-white font-medium
               border-2 border-gray-800
               focus:outline-none focus:ring-1 focus:ring-white focus:border-white
               hover:bg-slate-300 transition-colors duration-300"
        />
      </div>

      {/* Grid Produk */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-4 cursor-pointer transform hover:scale-105"
            >
              <div className="overflow-hidden rounded-t-md mb-4">
                <Image
                  className="w-full h-48 object-cover"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </div>
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
        <p className="text-center text-gray-800 font-semibold">
          No Products Available
        </p>
      )}
    </div>
  );
}

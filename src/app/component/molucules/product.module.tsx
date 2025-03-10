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

  return <div>product disini</div>;
}

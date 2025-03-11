import React from "react";
import ProductList from "../component/molucules/product.module";
import Navbar from "../component/atomics/navbar.module";

export default function Product() {
  return (
    <div className="bg-slate-300 drop-shadow-2xl">
      <Navbar />
      <ProductList />
    </div>
  );
}

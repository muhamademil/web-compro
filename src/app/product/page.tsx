import React from "react";
import ProductList from "../component/molucules/product.module";
import Navbar from "../component/atomics/navbar.module";

export default function Product() {
  return (
    <section className="flex flex-col justify-center min-h-screen pt-25 pb-5 sm:px-10 lg:px-6 bg-slate-300">
      <div className=" px-4 flex justify-center items-center drop-shadow-lg">
        <ProductList />
      </div>
    </section>
  );
}

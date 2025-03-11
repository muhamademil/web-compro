import React from "react";
import Navbar from "../component/atomics/navbar.module";

export default function Teams() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-300 w-full h-screen flex justify-center items-center">
        <h1 className="flex justify-center items-center text-orange-600">
          Ini Halaman teams
        </h1>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { getBackgroundImage } from "@/lib/products/imageUrl";
import Navbar from "./component/atomics/navbar.module";

export default function LandingPage() {
  const [bgImage, setBgImage] = useState<string[]>([]);

  useEffect(() => {
    const fetchImage = async () => {
      const imgBackground = await getBackgroundImage();
      setBgImage(imgBackground);
    };
    fetchImage();
  }, []);

  return (
    <div className=" overflow-hidden">
      <Navbar />

      {/* Background Image Section */}
      <div
        className="w-full h-screen relative"
        style={{
          backgroundImage: `url('${bgImage[3]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content on top of the background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Design Interior
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            recusandae adipisci odio necessitatibus, corrupti deserunt eligendi
            commodi voluptatem architecto expedita iusto ex quam saepe cum
            assumenda illum repudiandae, cumque perspiciatis!
          </p>

          <a href="#service">
            <button className="bg-white flex rounded-md p-2 text-blue-950 font">
              Read more!
            </button>
          </a>
        </div>
      </div>

      {/* Service Section */}
      <div
        id="service"
        className="w-full h-screen bg-slate-200 py-10 px-4 gap-5 flex flex-col-3"
      >
        {/* Desain 1 */}
        <div className="relative w-full h-full bg-blue-300">
          <img
            className="w-full h-full object-cover opacity-70" // Adjusted opacity
            src={bgImage[0]}
            alt="Design"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          {/* Overlay with opacity */}
          <div className="absolute inset-0 flex justify-center items-center text-center text-white">
            <h1 className="text-3xl font-bold text-orange-500">Design</h1>
            <p className="mt-2 text-lg">
              We create beautiful and user-friendly designs tailored to your
              needs.
            </p>
          </div>
        </div>

        {/* Desain 2 */}
        <div className="relative w-full h-full bg-blue-950">
          <img
            className="w-full h-full object-cover opacity-10"
            src={bgImage[5]}
            alt="Development"
          />
          <div className="absolute inset-0 flex justify-center items-center text-center text-white">
            <h1 className="text-3xl font-bold text-orange-500">Development</h1>
            <p className="mt-2 text-lg">
              Our development team builds scalable and robust web applications.
            </p>
          </div>
        </div>

        {/* Desain 3 */}
        <div className="relative w-full h-full bg-orange-500">
          <img
            className="w-full h-full object-cover"
            src={bgImage[4]}
            alt="Marketing"
          />
          <div className="absolute inset-0 flex justify-center items-center text-center text-white">
            <h1 className="text-3xl font-bold text-orange-500">Marketing</h1>
            <p className="mt-2 text-lg">
              We provide marketing solutions to help your brand grow and reach
              its full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

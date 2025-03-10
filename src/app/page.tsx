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
          backgroundImage: `url('${bgImage[0]}')`,
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
        className="w-full h-screen bg-white py-10 px-4 gap-5 flex flex-col-3"
      >
        <div className="w-full h-full bg-pink-500">
          <h1 className="text-5xl py-7">Our Service</h1>
        </div>

        <div className="w-full h-full bg-blue-500">
          <img className="w-screen h-1/2" src={bgImage[2]} alt="" />
          <h1>Interior-Design</h1>
        </div>

        <div className="w-full h-full bg-orange-500">
          <img className="w-full h-full" src={bgImage[3]} alt="" />
        </div>
      </div>
    </div>
  );
}

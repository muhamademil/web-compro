"use client";
import React, { useState, useEffect } from "react";
import { getBackgroundImage } from "@/lib/products/imageUrl";
import TestimonialsSection from "./component/molucules/testimonial.module";
import Image from "next/image";

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
    <div className="overflow-hidden">
      {/* Background Image Section */}
      <div
        className="w-full h-screen relative"
        style={{
          backgroundImage: bgImage[5] ? `url('${bgImage[5]}')` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Gradient Overlay for Text Contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end px-6 sm:px-12 md:px-24 lg:px-32 pb-30">
          <div className="text-white max-w-xl space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Transform Your Space with Exceptional
            </h1>

            <p className="text-sm sm:text-base md:text-base font-light leading-relaxed text-gray-300">
              Focused on delivering stylish and functional interior solutions,
              we turn your personal vision into reality. With careful
              craftsmanship, innovative design, and a strong commitment to
              quality, we create spaces that inspire and endure.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#services">
                <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none">
                  Explore Services
                </button>
              </a>

              <a href="/about">
                <button className="bg-transparent border border-white text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div
        id="services"
        className="w-full min-h-screen bg-slate-200 py-16 px-4 flex flex-col items-center"
      >
        {/* Heading Section */}
        <div className="mb-12 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Interior Design Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Transform your space into something extraordinary with our
            professional interior design services. We specialize in creating
            functional, stylish, and comfortable environments tailored to your
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full grid gap-6 lg:grid-cols-3 max-w-7xl">
          {/* Service 1: Living Room Design */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
            {bgImage[1] && (
              <Image
                className=" object-cover opacity-70"
                src={bgImage[1]}
                alt="Living Room Design"
                fill
              />
            )}

            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Living Room Design
              </h3>
              <p className="text-sm leading-relaxed">
                Cozy and elegant living room concepts that reflect your
                lifestyle with modern and minimalist aesthetics.
              </p>
            </div>
          </div>

          {/* Service 2: Office Space Design */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
            {bgImage[3] && (
              <Image
                className=" object-cover opacity-70"
                src={bgImage[3]}
                alt="Office Design"
                fill
              />
            )}

            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Office Space Design
              </h3>
              <p className="text-sm leading-relaxed">
                Productive and ergonomic office interiors that foster creativity
                and enhance work efficiency.
              </p>
            </div>
          </div>

          {/* Service 3: Home Renovation */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
            {bgImage[0] && (
              <Image
                className=" object-cover opacity-70"
                src={bgImage[0]}
                alt="Office Design"
                fill
              />
            )}

            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Home Renovation
              </h3>
              <p className="text-sm leading-relaxed">
                Complete renovation services to give your home a fresh, modern,
                and luxurious feel.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/product"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            Explore Our Products
          </a>
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}

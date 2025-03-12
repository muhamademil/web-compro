"use client";
import React, { useState, useEffect } from "react";
import { getBackgroundImage } from "@/lib/products/imageUrl";
import TestimonialsSection from "./component/molucules/testimonial.module";

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
          backgroundImage: `url('${bgImage[3]}')`,
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
              <a href="#service">
                <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none">
                  Explore Services
                </button>
              </a>

              <a href="#about">
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
        id="service"
        className="w-full h-screen bg-slate-200 py-16 px-4 flex flex-col items-center"
      >
        {/* Heading Section */}
        <div className="mb-12 text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We offer a range of services to meet your business needs. From
            creative design, solid development, to powerful marketing
            strategies, we help you grow and stand out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full grid gap-6 lg:grid-cols-3 max-w-7xl">
          {/* Service 1 */}
          <div className="relative w-full h-90 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <img
              className="w-full h-full object-cover opacity-70"
              src={bgImage[0]}
              alt="Design"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                Design
              </h3>
              <p className="text-sm leading-relaxed">
                Beautiful and user-friendly designs tailored to your brand and
                goals.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative w-full h-90 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <img
              className="w-full h-full object-cover opacity-70"
              src={bgImage[5]}
              alt="Development"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                Development
              </h3>
              <p className="text-sm leading-relaxed">
                Scalable, robust web applications built with cutting-edge
                technologies.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative w-full h-90 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <img
              className="w-full h-full object-cover opacity-70"
              src={bgImage[4]}
              alt="Marketing"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                Marketing
              </h3>
              <p className="text-sm leading-relaxed">
                Powerful strategies to help your brand grow and reach its full
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}

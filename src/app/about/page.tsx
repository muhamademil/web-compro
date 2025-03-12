import React, { useEffect, useState } from "react";
import { getTestimonials, ITestimonials } from "@/lib/products/testimonials";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white shadow-md">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="mt-6 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to{" "}
          <span className="text-orange-500 font-semibold">Interior Vision</span>
          , where design meets innovation. We are passionate about transforming
          spaces into elegant and functional environments tailored to your
          lifestyle.
        </p>
      </section>

      {/* Our Story */}

      <div className="w-full py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center font-semibold text-gray-800">
            Our Story
          </h2>
          <p className="mt-6 text-center text-base text-gray-600 leading-relaxed">
            Founded in 2025, SpaceEnough was born from a simple dream: to create
            spaces that are not only beautiful but also meaningful. Starting
            from a small studio, we committed ourselves to delivering interior
            designs that reflect each client’s personality, lifestyle, and
            unique needs. In a world that’s constantly evolving, we believe that
            space is an extension of who we are. Every corner of a home, office,
            or commercial area should tell a story. That’s why we embrace a
            personalized design approach, where every project begins with
            listening and understanding our clients’ visions. With a team of
            young, creative, and experienced designers, SpaceEnough blends
            functionality, aesthetic beauty, and innovation into every design.
            We don’t just create spaces—we craft better living experiences.
            Since our journey began in 2025, we are proud to have brought life
            to various projects that make a difference. From warm, personal
            residences, uniquely themed cafes, to inspiring workspaces, each
            project is delivered with dedication and a deep passion for design.
            And this is just the beginning of our story.
          </p>
        </div>
      </div>

      {/* Our Services */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Residential Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We create warm and inviting home interiors tailored to your
                personality and lifestyle. From modern minimalism to classic
                elegance, we bring your vision to life.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Commercial Spaces
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our commercial interior solutions are designed to maximize
                productivity and impress clients. We craft inspiring workspaces,
                retail stores, and hospitality venues.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Custom Furniture & Decor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We design and build bespoke furniture and decorative pieces that
                perfectly complement your space. Every piece is crafted with
                care by our skilled artisans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us CTA */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us today for a consultation
            and let’s bring your vision to life.
          </p>
          <button className="mt-8 bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

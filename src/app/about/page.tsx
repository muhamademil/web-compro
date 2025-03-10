import React from "react";
import Navbar from "../component/atomics/navbar.module";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <section className="text-center py-16 bg-white shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are a forward-thinking company with a passion for innovation. Our
          goal is to deliver top-notch solutions to our clients, ensuring that
          their business thrives in the ever-evolving digital world.
        </p>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Our mission is to provide exceptional service and to create
            meaningful experiences for our clients. We believe in empowering
            businesses through innovation and technology.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Team
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <img
                src="/images/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <img
                src="/images/team2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <img
                src="/images/team3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alice Johnson
              </h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have any questions or inquiries? Reach out to us, and we will be
            happy to assist.
          </p>
          <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

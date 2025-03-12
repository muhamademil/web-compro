"use client";
import React, { useEffect, useState } from "react";
import { getTestimonials, ITestimonials } from "@/lib/products/testimonials";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto py-6 px-2 max-w-6xl rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          What Our Clients Say
        </h2>

        {loading ? (
          <p className="text-center text-gray-400 text-sm">
            Loading testimonials...
          </p>
        ) : testimonials.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 h-full">
                  <img
                    className="w-full h-32 object-cover rounded-md mb-3"
                    src={testimonial.photo}
                    alt={testimonial.name}
                  />
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-700 text-sm italic line-clamp-4">
                    {testimonial.messege}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-red-400 text-sm font-medium">
            No Testimonials Available
          </p>
        )}
      </div>
    </div>
  );
}

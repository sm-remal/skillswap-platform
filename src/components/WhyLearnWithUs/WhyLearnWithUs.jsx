import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'; 
import "swiper/css";
import "swiper/css/pagination";

const WhyLearnWithUs = () => {
  const features = [
    {
      title: "Expert Instructors",
      desc: "Top rated instructors with proven experience to guide you effectively.",
      icon: "👨‍🏫",
    },
    {
      title: "Flexible Learning",
      desc: "Learn at your own pace, anytime, anywhere with our flexible schedule.",
      icon: "⏰",
    },
    {
      title: "Affordable Pricing",
      desc: "Quality courses at pocket-friendly prices without compromising value.",
      icon: "💰",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-3"> 
          Why Learn With Us?
        </h2>
        <p className="text-md md:text-lg mb-8 max-w-xl mx-auto"> 
          Expert instructors, flexible schedule, and quality content to help you succeed.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{ 
            640: {
              slidesPerView: 2, 
              spaceBetween: 20,
            },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-10"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 mx-2"> 
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyLearnWithUs;
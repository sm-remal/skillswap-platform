import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import fullstack from "../../assets/fullStack.jpg";
import marketing from "../../assets/digitalMarketing.jpg";
import videoEditing from "../../assets/video.jpg";
import python from "../../assets/python.jpg";
import publicSpeaking from "../../assets/publicSpeaking.jpg";
import spoken from "../../assets/englishSpoken.jpg";
import guitar from "../../assets/guitar.jpg";
import photography from "../../assets/photography.jpg";
import uiux from "../../assets/uiux.jpg";
import { Link } from "react-router";

const HeroSlider = () => {
  const slides = [marketing, fullstack, spoken, videoEditing, python, publicSpeaking, photography, guitar, uiux ];

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between md:py-16 py-6 px-6 md:px-12 bg-blue-200">
      {/* Left Section */}
      <div className="flex-1 md:pr-10 text-center md:text-left mb-8">
        <h2 className="md:text-5xl text-3xl font-extrabold text-gray-800 drop-shadow-sm mb-4">
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent inline-block pb-2 md:pb-4">
            Learn. Share. Grow.
          </span>
          <br />
          with <span className="text-gray-900">SkillSwap</span>
        </h2>

        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-pink-500 rounded-full mb-4 mx-auto md:mx-0"></div>

        <p className="text-black text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
          Discover and exchange new skills with creative minds near you — from{" "}
          <span className="font-semibold text-blue-600">programming</span> and{" "}
          <span className="font-semibold text-purple-600">design</span> to{" "}
          <span className="font-semibold text-pink-600">music</span> and{" "}
          <span className="font-semibold text-indigo-600">public speaking</span>.
          Build connections, learn together, and inspire growth.
        </p>

        <Link to={"/courses"} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-5 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md cursor-pointer">
          Explore Skills →
        </Link>
      </div>

      {/* Right Section (Swiper Slider) */}
      <div className="flex-1 w-full md:w-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} 
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="py-6">
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-white rounded-3xl overflow-hidden shadow-lg">
                <figure className="overflow-hidden">
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    className="w-full h-82 xl:h-90 object-cover hover:scale-103 transition-transform duration-500"/>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;




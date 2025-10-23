import React, { useEffect, useState } from "react";
import fullstack from "../../assets/fullStack.jpg";
import marketing from "../../assets/digitalMarketing.jpg";
import videoEditing from "../../assets/video.jpg";
import python from "../../assets/python.jpg";
import publicSpeaking from "../../assets/publicSpeaking.jpg";
import spoken from "../../assets/englishSpoken.jpg";
import guitar from "../../assets/guitar.jpg";
import photography from "../../assets/photography.jpg";
import uiux from "../../assets/uiux.jpg";

const images = [marketing, fullstack, spoken, videoEditing, python, publicSpeaking, photography, guitar, uiux ];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (

    <div
      className="flex flex-col md:flex-row justify-center gap-10 md:gap-0 items-center md:h-[550px] px-4 md:px-10 py-10"
      style={{
        background:
          "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 25%, #cfd9df 50%, #d4c1ec 75%, #fbc2eb 100%)",
      }}
    >
      {/* Left Side */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 drop-shadow-sm">
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Learn. Share. Grow.
          </span>{" "}
          <br />
          with <span className="text-gray-900">SkillSwap</span>
        </h2>

        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-pink-500 mx-auto md:mx-0 rounded-full"></div>

        <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          Discover and exchange new skills with creative minds near you — from{" "}
          <span className="font-semibold text-blue-600">programming</span> and
          <span className="font-semibold text-purple-600"> design</span> to
          <span className="font-semibold text-pink-600"> music</span> and
          <span className="font-semibold text-indigo-600">
            {" "}
            public speaking
          </span>
          . Build connections, learn together, and inspire growth.
        </p>

        <div className="pt-3">
          <button className="px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore Skills →
          </button>
        </div>
      </div>

      {/* Right Side (Auto Carousel) */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full h-[380px] rounded-2xl shadow-lg overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
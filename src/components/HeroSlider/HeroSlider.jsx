import React from 'react';
import fullstack from '../../assets/fullStack.jpg'
import marketing from '../../assets/digitalMarketing.jpg'
import videoEditing from '../../assets/video.jpg'
import python from '../../assets/python.jpg'
import publicSpeaking from '../../assets/publicSpeaking.jpg'
import spoken from '../../assets/englishSpoken.jpg'
import guitar from '../../assets/guitar.jpg'
import photography from '../../assets/photography.jpg'
import uiux from '../../assets/uiux.jpg'

const HeroSlider = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center md:gap-14 items-center md:h-[550px] px-10"
      style={{
        background: "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 25%, #cfd9df 50%, #d4c1ec 75%, #fbc2eb 100%)"
      }}
    >
      {/* Left Side */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-800 drop-shadow-sm">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Learn. Share. Grow.
          </span>{" "}
          <br />
          with <span className="text-gray-900">SkillSwap</span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto md:mx-0 rounded-full"></div>

        <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          Discover and exchange new skills with creative minds near you —  
          from <span className="font-semibold text-blue-600">programming</span> and  
          <span className="font-semibold text-purple-600"> design</span> to  
          <span className="font-semibold text-pink-600"> music</span> and  
          <span className="font-semibold text-indigo-600"> public speaking</span>.  
          Build connections, learn together, and inspire growth.
        </p>

        <div className="pt-3">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore Skills →
          </button>
        </div>
      </div>

      {/* Right Side (Carousel Section) */}
      <div className='flex-1'>
        <div className="carousel w-full h-[380px] rounded-2xl shadow-lg overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={marketing} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide9" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={fullstack} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src={spoken} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img src={videoEditing} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <img src={python} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide6" className="carousel-item relative w-full">
            <img src={publicSpeaking} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5" className="btn btn-circle">❮</a>
              <a href="#slide7" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide7" className="carousel-item relative w-full">
            <img src={photography} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide6" className="btn btn-circle">❮</a>
              <a href="#slide8" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide8" className="carousel-item relative w-full">
            <img src={guitar} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide7" className="btn btn-circle">❮</a>
              <a href="#slide9" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide9" className="carousel-item relative w-full">
            <img src={uiux} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide8" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

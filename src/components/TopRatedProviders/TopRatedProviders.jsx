import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TopRatedProviders = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      easing: "ease-in-out", 
    });
  }, []);


    // Static Data for Top-Rated Providers, Array of Object 
  const providers = [
    {
      id: 1,
      name: "Sara Hossain",
      image: "https://i.ibb.co/Y4KFgvWL/sara.jpg",
      expertise: "Spoken English Practice",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Tasrif Khan",
      image: "https://i.ibb.co/Pvk3nLM1/tasrif.jpg",
      expertise: "Fullstack Web Development",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Mehedi Hasan",
      image: "https://i.ibb.co/ymH8kLRd/mehedi.jpg",
      expertise: "Public Speaking & Presentation Skills",
      rating: 5.0,
    },
  ];

  return (
    <section className=" md:py-10 pb-10">
      {/*  Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-5" data-aos="zoom-in">
        <h2 className="text-3xl font-extrabold text-blue-600">
          Top Rated Providers
        </h2>
        <p className="text-gray-600 mt-3 text-base">
          Meet our top-rated and passionate instructors who inspire confidence, share real-world expertise, and guide learners to achieve their goals, grow their skills, and succeed in today’s competitive world.
        </p>
      </div>

      {/*  Providers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {providers.map((provider, index) => (
          <div
            key={provider.id}
            className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center p-6"
            data-aos={
              index === 0
                ? "zoom-in-right"
                : index === 1
                ? "zoom-in-up"
                : "zoom-in-left"
            }
            data-aos-delay={index * 150}
          >
            {/*  Image */}
            <div className="overflow-hidden w-28 h-28 mx-auto rounded-full border-4 border-blue-500 shadow-md mb-4">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {provider.name}
            </h3>
            <p className="text-gray-500 text-sm">{provider.expertise}</p>

            {/*  Rating */}
            <div className="flex justify-center items-center mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={15}
                  className={
                    i < Math.round(provider.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }/>
              ))}
              <span className="text-gray-600 text-sm ml-1">
                {provider.rating.toFixed(1)}
              </span>
            </div>

            {/*  View Button */}
            {/* <button className="w-full mt-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-pink-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              View Profile →
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;

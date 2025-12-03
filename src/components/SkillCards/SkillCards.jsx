import React from "react";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const SkillCards = ({ skills }) => {
  const { skillId, skillName, image, rating, price } = skills || {};

  return (
    <div className="bg-white/90 backdrop-blur-sm w-full border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">

      {/* Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={skillName}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {skillName}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-0.5" />
          <FaStar className="mr-0.5" />
          <FaStar className="mr-0.5" />
          <FaStar className="mr-0.5" />
          <FaStar className="mr-0.5" />
          <span className="font-semibold text-gray-700">{rating}</span>
        </div>

        {/* Price */}
        <p className="text-gray-700 font-medium flex items-center gap-1.5">
          Price: <span className="text-blue-600 font-semibold flex items-center"><TbCurrencyTaka size={20} />{price}</span>
        </p>

        {/* Button pushed to bottom */}
        <div className="mt-auto">
          <Link to={`/skill-details/${skillId}`}>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md cursor-pointer">
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;

import React from "react";
import { FaStar } from "react-icons/fa";

const SkillCards = ({ skills }) => {
  const { skillName, image, rating, price } = skills;

  return (
    <div className="bg-white/90 backdrop-blur-sm w-full border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
      {/* 🖼️ Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={skillName}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* 📄 Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {skillName}
        </h3>

        {/* ⭐ Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={15}
              className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-600 text-sm ml-1">{rating.toFixed(1)}</span>
        </div>

        {/* 💰 Price */}
        <p className="text-gray-700 font-medium">
          Price: <span className="text-blue-600 font-semibold">${price}</span>
        </p>

        {/* 🔘 View Details */}
        <button className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-pink-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default SkillCards;

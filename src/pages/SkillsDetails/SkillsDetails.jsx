import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaStar, FaEnvelope, FaUser } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';
import ErrorDetailsPage from '../../components/ErrorPage/ErrorDetailsPage';

const SkillsDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();

  const skill = skills.find(skill => skill.skillId == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Session booked successfully!");
    e.target.reset();
  };

  if (!skill) {
    return <ErrorDetailsPage></ErrorDetailsPage>
  }

  return (   
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden my-8 transition-shadow duration-300">
      <Toaster position="top-center" />

      {/* Image Section */}
      <img src={skill.image} alt={skill.skillName} className="w-full h-56 object-cover"/>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{skill.skillName}</h2>

        <div className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" />
          <span className="font-semibold text-gray-700">{skill.rating}</span>
        </div>

        <p className="text-gray-600 text-sm">{skill.description}</p>

        <div className="flex justify-between items-start sm:items-center pt-2 border-t border-gray-200 text-sm">
          <p className="text-blue-600 font-semibold">
            💰 Price: ${skill.price}
          </p>
          <p className="text-gray-500">
            Slots Available: <span className="font-semibold">{skill.slotsAvailable}</span>
          </p>
        </div>

        <div className="mt-3 bg-gray-100 rounded-lg p-3 text-sm">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <FaUser /> <span>{skill.providerName}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <FaEnvelope /> <span>{skill.providerEmail}</span>
          </div>
        </div>

        <div className="mt-3">
          <p className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            {skill.category}
          </p>
        </div>

        {/* Book Session Form */}
        <div className="mt-5 border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Book a Session</h3>

          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"/>

            {/* Buttons */}
            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200 text-sm">
                Book Session
              </button>            
              <Link to="/"
                className="flex-1 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200 text-sm">← Go Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;

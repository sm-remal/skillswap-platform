import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaStar, FaEnvelope, FaUser, FaClock, FaLanguage, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaCheckCircle, FaAward, FaBookOpen, FaVideo, FaCertificate } from "react-icons/fa";
import { TbCurrencyTaka } from 'react-icons/tb';
import { MdOutlineAccessTime } from 'react-icons/md';
import { Toaster, toast } from 'react-hot-toast';
import ErrorDetailsPage from '../../components/ErrorPage/ErrorDetailsPage';

const SkillsDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();
  const skill = skills.find(skill => skill.skillId == id);

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '',
    preferredTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Session booked successfully!");
    setFormData({ name: '', email: '', phone: '', message: '', preferredTime: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!skill) {
    return <ErrorDetailsPage />;
  }

  // Calculate rating stars
  const fullStars = Math.floor(skill.rating);
  const hasHalfStar = skill.rating % 1 >= 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Toaster position="top-center" />

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative h-80 overflow-hidden group">
                <img 
                  src={skill.image} 
                  alt={skill.skillName} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-indigo-600">{skill.category}</span>
                </div>
                {skill.slotsAvailable <= 5 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                    <span className="text-sm font-semibold">Only {skill.slotsAvailable} spots left!</span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {skill.skillName}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${
                          i < fullStars 
                            ? 'text-yellow-400' 
                            : i === fullStars && hasHalfStar
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        } text-xl`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold text-gray-900">{skill.rating}</span>
                  <span className="text-gray-500">({skill.reviews} reviews)</span>
                  <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Highly Rated
                  </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {skill.description}
                </p>

                {/* Key Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-shadow">
                    <FaClock className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Duration</p>
                      <p className="font-semibold text-gray-900">{skill.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-shadow">
                    <FaGraduationCap className="text-purple-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Level</p>
                      <p className="font-semibold text-gray-900">{skill.level}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow">
                    <FaLanguage className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Language</p>
                      <p className="font-semibold text-gray-900">{skill.language}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl hover:shadow-md transition-shadow">
                    <FaUsers className="text-orange-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Session Type</p>
                      <p className="font-semibold text-gray-900">{skill.sessionType}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl hover:shadow-md transition-shadow">
                    <FaCalendarAlt className="text-pink-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Sessions</p>
                      <p className="font-semibold text-gray-900">{skill.totalSessions} sessions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl hover:shadow-md transition-shadow">
                    <FaMapMarkerAlt className="text-cyan-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="font-semibold text-gray-900">{skill.location}</p>
                    </div>
                  </div>
                </div>

                {/* Schedule Info */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MdOutlineAccessTime className="text-indigo-600 text-xl" />
                    Available Schedule
                  </h3>
                  <p className="text-gray-700">{skill.schedule}</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaBookOpen className="text-indigo-600" />
                What You'll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Comprehensive understanding of core concepts",
                  "Hands-on practical exercises and projects",
                  "Real-world application and case studies",
                  "Best practices and industry standards",
                  "Problem-solving and critical thinking",
                  "Personalized feedback and guidance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About Instructor */}
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Your Instructor</h2>
              
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUser className="text-3xl text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.providerName}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <FaEnvelope className="text-gray-400" />
                    <a href={`mailto:${skill.providerEmail}`} className="hover:text-indigo-600 transition-colors break-all">
                      {skill.providerEmail}
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{skill.providerBio}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                      <FaAward />
                      <span>Verified Expert</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      <FaUsers />
                      <span>{skill.reviews}+ Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaVideo className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Interactive Sessions</h3>
                    <p className="text-sm text-gray-600">Real-time learning with Q&A support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCertificate className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Certificate of Completion</h3>
                    <p className="text-sm text-gray-600">Earn recognition for your achievement</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBookOpen className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Learning Resources</h3>
                    <p className="text-sm text-gray-600">Access to materials and recordings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Community Support</h3>
                    <p className="text-sm text-gray-600">Connect with fellow learners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                {/* Price Section */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-gray-900 flex items-center">
                      <TbCurrencyTaka className="text-3xl" />
                      {skill.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500">/ course</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Available Slots:</span>
                    <span className={`font-semibold px-3 py-1 rounded-full ${
                      skill.slotsAvailable <= 3 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {skill.slotsAvailable} left
                    </span>
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                      <option value="evening">Evening (6 PM - 9 PM)</option>
                      <option value="weekend">Weekend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Any questions or special requests?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md cursor-pointer"
                  >
                    Book Your Session Now
                  </button>
                </form>

                {/* Features List */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>Instant booking confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>Flexible rescheduling policy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>Certificate upon completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>Lifetime access to resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
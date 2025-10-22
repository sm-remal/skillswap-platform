import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router'; 

const Navbar = () => {
  return (
    <div
      className="shadow-xs sticky top-0 z-50"
      style={{
        background: "linear-gradient(90deg, #c2e9fb 0%, #d4c1ec 50%, #fbc2eb 100%)"
      }}
    >
      <div className="navbar max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm text-gray-800">
        
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white/90 backdrop-blur-md rounded-box w-52">
              <li><NavLink to="/" className="font-semibold text-gray-800">Home</NavLink></li>
              <li><NavLink to="/my-profile" className="font-semibold text-gray-800">My Profile</NavLink></li>
            </ul>
          </div>
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            SkillSwap
          </h2>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-800 font-semibold">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Home</NavLink></li>
            <li><NavLink to="/my-profile" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>My Profile</NavLink></li>
          </ul>
        </div>

        {/*  Right */}
        <div className="navbar-end gap-3">
          <FaUserCircle size={28} className="text-gray-700" />
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
import { MdMenu } from "react-icons/md";

const Navbar = () => {

  const { user, setUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successful 🎉");
        setUser(null);
        navigate("/login")
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="shadow-xs fixed top-0 w-full z-50 bg-purple-800">
      <div className="navbar max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm text-gray-800 md:px-10">

        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-white lg:hidden text-gray-700">
              <MdMenu size={32} />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content p-2 -ml-1 mt-4 shadow bg-base-100 backdrop-blur-md rounded-box w-52">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "font-bold" : "font-bold"}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) => isActive ? "text-white underline font-bold" : "font-bold"}>
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) => isActive ? "text-white underline font-bold" : "font-bold"}>
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "text-white underline font-bold" : "font-bold"}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) => isActive ? "text-white underline font-bold" : "font-bold"}>
                  Support
                </NavLink>
              </li>
            </ul>
          </div>

          <Link className="text-[28px] ml-3 md:ml-0 font-extrabold text-white">
            SkillSwap
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-800 font-semibold text-[18px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white"}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white"}>
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white"}>
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white"}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/support"
                className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white"}>
                Support
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">

          {/* Avatar Dropdown */}
          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <img
                  src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-gray-200 cursor-pointer"
                />
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="dropdown-content z-[100] menu p-4 mt-4 -mr-8 shadow bg-white rounded-xl w-64 space-y-2"
              >
                {/* User Info */}
                <li className="border-b pb-2">
                  <div className='flex flex-col -space-y-2'>
                    <h3 className="text-lg font-bold text-gray-900">{user.displayName}</h3>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                  </div>
                </li>

                <div className="space-y-0.5">
                  <li>
                    <NavLink
                      to="/my-profile"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 rounded-md 
        ${isActive ? "bg-gray-200 text-black" : "text-black"}`
                      }
                    >
                      <i className="fa-regular fa-user"></i> Profile
                    </NavLink>
                  </li>
                </div>


                {/* Logout */}
                <li className="pt-2">
                  <button
                    onClick={handleSignout}
                    className="w-full text-center bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-md transition-all duration-300"
                  >
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Login / Signup Buttons */}
          {!user && (
            <div className="flex gap-3">
              <Link to="/login"
                className='text-white font-bold'>
                Login
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;

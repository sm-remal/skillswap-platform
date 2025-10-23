import React, { useContext, useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (user) {
      setFullName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = () => {
    if (!user) return toast.error("No user found!");

    updateProfile(user, {
      displayName: fullName,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: fullName, photoURL: photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile.");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10">
        
        {/* ===== Left Side ===== */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">
            Update Profile
          </h2>

          {/* Avatar */}
          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-36 h-36 rounded-full object-cover border-4 border-indigo-400 shadow-md mb-4"
          />

          {/* Update Button */}
          <button
            onClick={handleUpdateProfile}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Update Profile
          </button>
        </div>

        {/* ===== Right Side ===== */}
        <div className="w-full md:w-2/3">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email (Read-only) */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Paste your photo URL here"
            />
          </div>

          {/* Address */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;



import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { getFriendlyMessage } from '../../errorMessage/errorMessage';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, updateUserProfile, setUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const trams = event.target.trams.checked;

        const atLeast6character = /^[\S\s]{6,}$/;
        const oneLetterOneDigit = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        const uppercaseLowercase = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!atLeast6character.test(password)) {
            setError("Password must be at least 6 characters long!");
            return;
        } else if (!oneLetterOneDigit.test(password)) {
            setError("Password must contain at least one letter and one number!");
            return;
        } else if (!uppercaseLowercase.test(password)) {
            setError("Password must have at least one uppercase, one lowercase, and one number!");
            return;
        } else if (!trams) {
            setError("Please accept our terms and conditions!");
            return;
        }

        createUser(email, password)
            .then(res => {
                updateUserProfile(displayName, photoURL)
                    .then(() => {
                        console.log(res.user)
                        toast.success("Signup successful");
                        setUser(null);
                        setSuccess(true);
                        navigate("/");
                    })
                    .catch(error => {
                        const friendlyMessage = getFriendlyMessage(error.code);
                        setError(friendlyMessage);
                    });
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code);
                setError(friendlyMessage);
            });
    };

    // Google SignIn
    const handleSignUpWithGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res)
                toast.success("Signup successful with Google 🎉");
                navigate("/");
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code);
                setError(friendlyMessage);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-300 via-purple-300 to-pink-300 px-4">
            <div className="card bg-white/90 backdrop-blur-md w-full max-w-sm shadow-2xl rounded-2xl my-16 border border-purple-200">
                <div className="card-body">
                    {/* Heading */}
                    <div className='flex justify-center mb-4'>
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-700 via-purple-700 to-pink-600">
                            Create Your Account
                        </h1>
                    </div>

                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-gray-800 font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input w-full border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 px-4"
                                required
                                placeholder="Enter your name"
                            />

                            {/* Photo URL */}
                            <label className="label text-gray-800 font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                className="input w-full border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 px-4"
                                placeholder="Paste your photo link"
                            />

                            {/* Email */}
                            <label className="label text-gray-800 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="input w-full border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 px-4"
                                required
                                placeholder="example@email.com"
                            />

                            {/* Password */}
                            <label className="label text-gray-800 font-medium">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    type={`${showPassword ? "text" : "password"}`}
                                    name="password"
                                    className="input w-full border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 pr-12 px-4"
                                    required
                                    placeholder="Enter a strong password"
                                />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 cursor-pointer text-gray-600 hover:text-purple-600 transition"
                                >
                                    {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                                </div>
                            </div>

                            {/* Checkbox */}
                            <label className="label mt-2 flex items-center gap-2">
                                <input type="checkbox" name="trams" className="checkbox checkbox-sm checkbox-secondary" />
                                <span className="text-gray-700">I agree to the <span className="text-purple-700 font-medium">terms & conditions</span>.</span>
                            </label>

                            {/* Messages */}
                            {success && <p className="text-green-600 mt-2 font-medium">✅ Account created successfully! You can now log in.</p>}
                            {error && <p className="text-red-600 mt-2 font-medium">⚠️ {error}</p>}

                            {/* Sign Up Button */}
                            <button className="btn w-full bg-linear-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold mt-4 shadow-md hover:shadow-lg transition-all duration-300">
                                Sign Up
                            </button>
                        </fieldset>
                    </form>

                    {/* Divider */}
                    <div className="divider text-gray-400">or</div>

                    {/* Google Sign Up */}
                    <div className="">
                        <button
                            onClick={handleSignUpWithGoogle}
                            className="btn w-full btn-outline border-purple-400 text-purple-700 hover:bg-purple-100 hover:border-purple-500 flex items-center justify-center gap-2 transition"
                        >
                            <FcGoogle size={20} /> Sign Up with Google
                        </button>
                    </div>

                    {/* Bottom link */}
                    <div className="text-center mt-3">
                        <p className="font-medium text-gray-700">
                            Already have an account?{" "}
                            <Link to="/login" className="text-purple-700 hover:text-pink-600 underline font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

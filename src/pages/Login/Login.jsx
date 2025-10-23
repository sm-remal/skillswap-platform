import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { getFriendlyMessage } from '../../errorMessage/errorMessage';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { userLogin, googleSignIn, forgetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        setSuccess("");
        setError("");

        // Login 
        userLogin(email, password)
            .then(res => {
                console.log(res.user)
                setSuccess(true);
                event.target.reset();
                toast.success("Login successful 🎉");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code);
                setError(friendlyMessage);
            });
    };

    // Login With Google 
    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                setSuccess(true);
                toast.success("Login successful 🎉");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code);
                setError(friendlyMessage);
            });
    };

    // Forget Password 
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(result => {
                console.log(result)
                toast.error("Password reset email sent! Check your inbox 💌");
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code);
                setError(friendlyMessage);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-300 via-purple-300 to-pink-300 px-4">
            <div className="card bg-white/90 backdrop-blur-md w-full max-w-sm shadow-2xl rounded-2xl my-14 border border-purple-200">
                <div className="card-body">
                    <div className='flex justify-center mb-4'>
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-700 via-purple-700 to-pink-600 text-center">
                            Login to Your Account
                        </h1>
                    </div>

                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset space-y-3">

                            {/* Email */}
                            <label className="label text-gray-800 font-medium">Email</label>
                            <input
                                type="email"
                                ref={emailRef}
                                name="email"
                                className="input w-full border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500"
                                placeholder="Enter your email"
                            />

                            {/* Password */}
                            <label className="label text-gray-800 font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={`${showPassword ? "text" : "password"}`}
                                    name="password"
                                    className="input w-full border border-purple-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500"
                                    required
                                    placeholder="Enter your password"
                                />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-3 right-4 text-gray-600 cursor-pointer hover:text-purple-600 transition"
                                >
                                    {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                                </div>
                            </div>

                            {/* Forget Password */}
                            <div onClick={handleForgetPassword}>
                                <a className="link link-hover text-purple-700 hover:text-pink-600">Forgot password?</a>
                            </div>

                            {/* Success/Error */}
                            {success && <p className="text-green-600 mt-2 font-medium">✅ Logged in successfully!</p>}
                            {error && <p className="text-red-600 mt-2 font-medium">⚠️ {error}</p>}

                            {/* Login Button */}
                            <button className="btn w-full bg-linear-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold mt-4 shadow-md hover:shadow-lg transition-all duration-300">
                                Login
                            </button>
                        </fieldset>
                    </form>

                    <div className='divider text-gray-400'>or</div>

                    {/* Google Login */}
                    <div className='space-y-3'>
                        <button
                            onClick={handleLoginWithGoogle}
                            className="btn w-full btn-outline border-purple-400 text-purple-700 hover:bg-purple-100 hover:border-purple-500 transition"
                        >
                            <FcGoogle size={20} className="mr-2" /> Login with Google
                        </button>
                    </div>

                    {/* Bottom Link */}
                    <div className='text-center mt-4'>
                        <p className='font-medium text-gray-700'>
                            Don't have an account?{" "}
                            <Link to="/signup" className='text-purple-700 hover:text-pink-600 underline font-semibold'>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

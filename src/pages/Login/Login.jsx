import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { getFriendlyMessage } from '../../errorMessage/errorMessage';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { userLogin, googleSignIn, forgetPassword } = useContext(AuthContext)

    const emailRef = useRef()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(email, password)

        setSuccess("")
        setError("")

        // User Login 
        userLogin(email, password)
            .then(res => {
                console.log(res)
                setSuccess(true)
                event.target.reset();
                toast.success("Login successful 🎉")

                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code)
                console.log(friendlyMessage)
                setError(friendlyMessage)
            })
    }
    // Google SignIn 
    const handleLoginWithGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res)
                setSuccess(true)
                toast.success("Login successful 🎉")
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code)
                console.log(friendlyMessage)
                setError(friendlyMessage)
            })
    }

    // Forget password 
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(result => {
                console.log(result)
                toast.error("Password reset email sent! Check your inbox 💌")
            })
            .catch(error => {
                const friendlyMessage = getFriendlyMessage(error.code)
                console.log(friendlyMessage)
                setError(friendlyMessage)
            })
    }





    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-14">
            <div className="card-body">
                <div className='flex justify-center'>
                    <h1 className="text-2xl text-gray-700 font-semibold">Login Your Account</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">

                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" ref={emailRef} name='email' className="input w-full" placeholder="Email" />

                        {/* Password  */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={`${showPassword ? "text" : "password"}`} name='password' className="input w-full" required placeholder="Password" />
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-4 text-gray-500 cursor-pointer' >
                                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                            </div>
                        </div>

                        {/* Forget Password  */}
                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>

                        {
                            success && <p className='text-green-600'>Logged in successfully!</p>
                        }

                        {
                            error && <p className='text-red-600'>{error}</p>

                        }

                        <button className="btn btn-neutral bg-gray-800 mt-4">Login</button>
                    </fieldset>
                </form>
                <div className='divider text-gray-400'>or</div>
                <div className='space-y-3 '>
                    <button onClick={handleLoginWithGoogle} className='btn w-full btn-outline'> <FcGoogle size={20} /> Login with Google</button>
                </div>
                <div className='text-center'>
                    <p className='font-medium text-gray-700'>Don't have an account? <Link to="/signup" className='text-secondary underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
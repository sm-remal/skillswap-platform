import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <div className='flex justify-center'>
                    <h1 className="text-2xl text-gray-700 font-semibold">Login Your Account</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div onClick={''}><a className="link link-hover">Forgot password?</a></div>

                        {/* {
                            success && <p className='text-green-600'>Logged in successfully!</p>
                        }

                        {
                            error && <p className='text-red-600'>{error}</p>

                        } */}

                        <button className="btn btn-neutral bg-gray-800 mt-4">Login</button>
                    </fieldset>
                </form>
                <div className='divider text-gray-400'>or</div>
                <div className='space-y-3 '>
                    <button onClick={''} className='btn w-full btn-outline'> <FcGoogle size={20} /> Login with Google</button>
                </div>
                <div className='text-center'>
                    <p className='font-medium text-gray-700'>Don't have an account? <Link to="/auth/register" className='text-secondary underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
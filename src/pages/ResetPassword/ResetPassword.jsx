import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { getFriendlyMessage } from "../../errorMessage/errorMessage";

const ResetPassword = () => {
    const { forgetPassword } = useContext(AuthContext);
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    // Autofill email from Login page
    useEffect(() => {
        if (location.state && location.state.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleForgetPassword = (event) => {
        event.preventDefault();
        setError("");

        if (!email) {
            setError("Please enter your email!");
            return;
        }

        forgetPassword(email)
            .then(res => {
                console.log(res)
                toast.success("Password reset email sent! Check your inbox 💌");
            })

            .catch(err => {
                const friendlyMessage = getFriendlyMessage(err.code);
                setError(friendlyMessage);
            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-violet-600">Reset Password</h2>
                <form onSubmit={handleForgetPassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 mb-2">{error}</p>}

                    <button
                        type="submit"
                        className="w-full mt-2 py-2 cursor-pointer rounded-lg bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-pink-500 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;



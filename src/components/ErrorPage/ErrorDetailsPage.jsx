import { AlertTriangle } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const ErrorDetailsPage = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4">

            <div className="bg-red-100 p-6 rounded-full shadow-sm mb-6">
                <AlertTriangle className="text-red-500 w-16 h-16" />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
                Skills is Not Found
            </h2>
            <p className="text-gray-500 max-w-md mb-8">
                The Skills are looking for does not exist or has been removed.
            </p>


            <div className="flex gap-3">
                <button onClick={() => navigate("/")}
                    className="btn bg-violet-600 text-white">Back to Home</button>
            </div>
        </div>
    );
};

export default ErrorDetailsPage;
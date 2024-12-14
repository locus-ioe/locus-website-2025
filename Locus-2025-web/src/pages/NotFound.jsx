import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
        <br />
        The page is under development !!!
      </p>
      <Link
        to="/locus-website-2025"
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-200"
      >
        Go Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;

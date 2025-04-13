import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './PageTitle';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <PageTitle title="Page Not Found" />
      
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8" style={{ fontFamily: "Barlow" }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors"
          >
            Go to Homepage
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/services"
              className="block bg-white text-amber-600 py-3 px-6 rounded-md border border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="block bg-white text-amber-600 py-3 px-6 rounded-md border border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
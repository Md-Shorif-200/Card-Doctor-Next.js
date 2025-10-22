// components/CarDoctorCard.js

import React from 'react';

// Simple Cog/Gear Icon SVG (to represent the "Car Doctor" logo)
const CogIcon = () => (
  <svg
    className="w-16 h-16 text-red-600"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* This is a simple gear path. For the exact icon, you'd use an image or more complex SVG */}
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16zm0-10a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

// ---

const CarDoctorCard = () => {
  return (
    // Main container for the entire content block.
    <div className="max-w-xs mx-auto">

      {/* -- TOP SECTION: Black Card Header -- 
      */}
      <div className="bg-black text-white p-6 rounded-t-xl text-center shadow-2xl">
        
        {/* Logo/Icon Area */}
        <div className="flex justify-center mb-4">
          {/* Note: The image logo is more complex (a gear with car headlights/eyes).
             We use a simple cog icon here as a placeholder for a beginner component. */}
          <CogIcon />
        </div>

        {/* Title and Tagline */}
        <h3 className="text-xl font-bold mb-1">Car Doctor</h3>
        <p className="text-sm mb-6">
          Need Help? We Are Here <br />
          To Help You
        </p>

        {/* Offer Box (White Box) */}
        <div className="bg-white text-black p-4 mx-auto rounded-lg shadow-xl">
          <p className="font-bold text-red-600 mb-1">Car Doctor Special</p>
          <p className="text-sm mb-4">
            Save up to <span className="font-bold text-lg">60% off</span>
          </p>
          
          {/* Get A Quote Button */}
          <button
            // onClick={() => console.log('Get A Quote clicked!')}
            className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg transition duration-150 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Get A Quote
          </button>
        </div>
      </div>

      {/* -- BOTTOM SECTION: Price and Checkout -- 
      */}
      <div className="p-4 bg-white rounded-b-xl shadow-2xl">
        
        {/* Price Display */}
        <p className="text-2xl font-bold text-black mb-4">
          Price <span className="text-gray-900">$250.00</span>
        </p>

        {/* Proceed Checkout Button (Full width, bright red) */}
        <button
          // onClick={() => console.log('Proceed Checkout clicked!')}
          className="w-full py-3 bg-red-600 text-white font-bold text-lg rounded-md transition duration-150 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Proceed Checkout
        </button>
      </div>
    </div>
  );
};

export default CarDoctorCard;
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Professional Circular Spinner */}
      <div className="w-16 h-16 border-4 border-t-[#FF3811] border-gray-200 rounded-full animate-spin mb-4"></div>

      {/* Loading text */}
      <p className="text-gray-700 text-lg font-medium">Loading, please wait...</p>
    </div>
  );
}

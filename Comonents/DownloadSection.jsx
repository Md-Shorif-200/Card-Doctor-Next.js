// components/DownloadSection.js

import React from 'react';

// You'll typically use an icon library like 'react-icons' for real projects,
// but for a beginner example, we'll use simple SVGs for the file and arrow.

// Simple File Icon SVG
const FileIcon = () => (
  <svg
    className="w-6 h-6 mr-4 text-white opacity-75"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Simple Arrow Icon SVG
const ArrowIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 12h-11m0 0l3-3m-3 3l3 3"
    />
  </svg>
);

// ---

const DownloadSection = () => {
  // Array of download items for easy rendering
  const downloadItems = [
    { title: 'Our Brochure', subtitle: 'Download', link: '#' },
    { title: 'Company Details', subtitle: 'Download', link: '#' },
  ];

  return (
    // Outer container: dark background, rounded corners, padding
    <div className="p-6 max-w-sm mx-auto bg-black rounded-xl shadow-lg">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-6">Download</h2>

      {/* Map through the items to render each download button */}
      {downloadItems.map((item, index) => (
        <div key={index} className={`flex items-center justify-between py-4 ${index > 0 ? 'mt-3' : ''}`}>
          
          {/* Left side: Icon and Text */}
          <div className="flex items-center">
            <FileIcon />
            <div>
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="text-sm text-white opacity-50">{item.subtitle}</p>
            </div>
          </div>

          {/* Right side: Red Arrow Button */}
          {/* Note: In the image, the second item has a small blue hash icon
             which is likely an app/action indicator. We'll omit it for simplicity
             and focus on the main layout for a beginner component. */}
          <a
            href={item.link}
            className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg transform transition duration-150 hover:bg-red-700"
            aria-label={`Download ${item.title}`}
          >
            {/* The Arrow Icon is rotated 180 degrees using the 'transform rotate-180' class
                to match the right-pointing arrow in the image. */}
            <ArrowIcon />
          </a>
        </div>
      ))}
      
    </div>
  );
};

export default DownloadSection;
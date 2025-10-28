import { FaArrowRightLong } from "react-icons/fa6";


import React from 'react';

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

const ArrowIcon = () => (
<FaArrowRightLong className="text-white"></FaArrowRightLong>
);

// ---

const DownloadSection = () => {

  const downloadItems = [
    { title: 'Our Brochure', subtitle: 'Download', link: '#' },
    { title: 'Company Details', subtitle: 'Download', link: '#' },
  ];

  return (
  
    <div className="p-6  bg-[#151515] rounded-xl shadow-lg">

      <h2 className="text-3xl font-bold text-white mb-6">Download</h2>

      {downloadItems.map((item, index) => (
        <div key={index} className={`flex items-center justify-between py-4 ${index > 0 ? 'mt-3' : ''}`}>

          <div className="flex items-center">
            <FileIcon />
            <div>
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="text-sm text-white opacity-50">{item.subtitle}</p>
            </div>
          </div>

          <a
            href={item.link}
            className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg transform transition duration-150 hover:bg-red-700"
            aria-label={`Download ${item.title}`}
          >
       
            <ArrowIcon />
          </a>
        </div>
      ))}
      
    </div>
  );
};

export default DownloadSection;
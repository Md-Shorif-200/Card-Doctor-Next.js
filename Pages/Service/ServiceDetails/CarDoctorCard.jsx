const logo = "/assets/service_logo.png";

import Image from "next/image";
import React from "react";



const CarDoctorCard = ({price}) => {
  return (
    <div className="">
      <div className="bg-black text-white p-6 rounded-t-xl text-center shadow-2xl">
        <div className="flex justify-center mb-4">
           <div className="relative w-[100px] h-[100px]">
             <Image src={logo} alt="service-logo" fill ></Image>
           </div>
        </div>


        <p className="text-sm mb-6">
          Need Help? We Are Here <br />
          To Help You
        </p>

        <div className="bg-white text-black p-4 mx-auto rounded-lg shadow-xl">
          <p className="font-bold text-red-600 mb-1">Car Doctor Special</p>
          <p className="text-sm mb-4">
            Save up to <span className="font-bold text-lg">60% off</span>
          </p>

          <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg transition duration-150 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Get A Quote
          </button>
        </div>
      </div>

      <div className="p-4 bg-white rounded-b-xl shadow-2xl">
        <p className="text-2xl font-bold text-black mb-4">
          Price <span className="text-gray-900">${price} </span>
        </p>

        <button className="w-full py-3 bg-red-600 text-white font-bold text-lg rounded-md transition duration-150 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Proceed Checkout
        </button>
      </div>
    </div>
  );
};

export default CarDoctorCard;

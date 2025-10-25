import React from "react";
import Image from "next/image";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

// --- Image Imports (as provided in the prompt) ---
// NOTE: These constants are used to structure the data, but the Image component
// will use the string paths from the JSON data.
// const img_1 = '/assets/images/products/1.png'
// const img_2 = '/assets/images/products/2.png'
// const img_3 = '/assets/images/products/3.png'
// const img_4 = '/assets/images/products/4.png'
// const img_5 = '/assets/images/products/5.png'
// const img_6 = '/assets/images/products/6.png'

// --- JSON Data Structure ---
const productsData = [
  {
    id: 1,
    name: "Car Engine Plug",
    price: "20.00",
    image: "/assets/images/products/1.png",
  },
  {
    id: 2,
    name: "Car Air Filter",
    price: "20.00",
    image: "/assets/images/products/2.png",
    hasLockIcon: true,
  },
  {
    id: 3,
    name: "Cools Led Light",
    price: "20.00",
    image: "/assets/images/products/3.png",
  },
  {
    id: 4,
    name: "Cools Led Light",
    price: "20.00",
    image: "/assets/images/products/4.png",
  },
  {
    id: 5,
    name: "Car Tires",
    price: "20.00",
    image: "/assets/images/products/5.png",
  },
  {
    id: 6,
    name: "Car Battery",
    price: "20.00",
    image: "/assets/images/products/6.png",
  },
];

// const LockIcon = () => (
//   <div className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-4 w-4 text-red-500"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
//       />
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M17 9V7a5 5 0 00-10 0v2h10z"
//       />
//     </svg>
//   </div>
// );

// --- Main Component ---
export default function OurProducts() {
  return (
    <div className="py-10 px-4">
      <SectionTitle
        title="Popular Products"
        subTitle="Browse Our Products"
        paragraph={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
      ></SectionTitle>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative bg-gray-50 p-6 rounded-t-lg flex justify-center items-center  h-54 overflow-hidden">
                {/* {product.hasLockIcon && <LockIcon />} */}

                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="mix-blend-multiply"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-1">
                  {product.name}
                </h3>

                <p className="text-lg text-red-500 font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-10">
          <button className="secondary_btn">More Products</button>
        </div>
      </Container>
    </div>
  );
}

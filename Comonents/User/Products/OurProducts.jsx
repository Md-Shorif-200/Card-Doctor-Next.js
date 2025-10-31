"use client";
import React from "react";
import Image from "next/image";
import Container from "@/Comonents/Container";
import SectionTitle from "@/Comonents/SectionTitle";

const productsData = [
  { id: 1, name: "Car Engine Plug", price: "20.00", image: "/assets/images/products/1.png" },
  { id: 2, name: "Car Air Filter", price: "20.00", image: "/assets/images/products/2.png" },
  { id: 3, name: "Cools Led Light", price: "20.00", image: "/assets/images/products/3.png" },
  { id: 4, name: "Car Headlight", price: "20.00", image: "/assets/images/products/4.png" },
  { id: 5, name: "Car Tires", price: "20.00", image: "/assets/images/products/1.png" },
  { id: 6, name: "Car Battery", price: "20.00", image: "/assets/images/products/6.png" },
];

export default function OurProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title="Popular Products"
          subTitle="Browse Our Products"
          paragraph="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-transform transform hover:-translate-y-1 duration-300"
            >
              {/* --- Product Image --- */}
              <div className="flex justify-center items-center bg-gray-100 h-56 rounded-t-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain mix-blend-multiply"
                />
              </div>

              {/* --- Product Info --- */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl text-red-500 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Button --- */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#FF3811] text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition">
            More Products
          </button>
        </div>
      </Container>
    </section>
  );
}

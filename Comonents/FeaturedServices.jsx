import React from "react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import { dbCollection, dbConnect } from "@/lib/mongodb";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./Service/ServiceCard";

// --- Fetch data from MongoDB ---
const getServicesData = async () => {
  const data = await dbConnect(dbCollection.Services).find({}).toArray();
  return data;
};

export default async function FeaturedServices() {
  const servicesData = await getServicesData();

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* --- Section Title --- */}
        <SectionTitle
          title="Service"
          subTitle="Our Service Area"
          paragraph="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData?.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>

        {/* --- Button --- */}
        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="bg-[#FF3811] text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
          >
            More Services
          </Link>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import { dbCollection, dbConnect } from "@/lib/mongodb";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const getServicesData = async () => {
  const data = await dbConnect(dbCollection.Services).find({}).toArray();

//   console.log(data);
  return data;
};

export default async function OurServices() {
     const servicesData = await getServicesData();
      console.log(servicesData);
      
  return (
    <div>
      <Container>
        <SectionTitle
          title="Service"
          subTitle="Our Service Area"
          paragraph={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
        ></SectionTitle>

        <div className="services_cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
                  {
                     servicesData?.map(service => {
                        return(
                             <div key={service?._id} className="service_card p-4 ">
                                    <div className="relative w-full h-[300px] sm:h-[210px]">
                                         <Image src={service?.img} alt={service?.title} fill className="rounded-md" ></Image>
                                    </div>

                                      <h1 className='text-[25px] capitalize font-semibold my-2 ' > {service?.title} </h1>
                                       <div  className="flex justify-between items-center">
                                       <p className="capitalize text-[20px] primary_color"> price : {service?.price} </p>
                                         
                                          <Link href={`/services/${service._id}`}>
                                          <HiArrowLongRight className="primary_color text-2xl cursor-pointer"></HiArrowLongRight>
                                          
                                          </Link>
                                             
                                       </div>

                             </div>
                        )
                     })
                  }
        </div>
      </Container>
    </div>
  );
}

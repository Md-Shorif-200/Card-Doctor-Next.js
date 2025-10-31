export const dynamic = "force-dynamic";
import CarDoctorCard from "@/Comonents/User/Service/ServiceDetails/CarDoctorCard";
import CommonBanner from "@/Comonents/CommonBanner";
import Container from "@/Comonents/Container";

import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";

import DownloadSection from "@/Comonents/User/Service/ServiceDetails/DownloadSection";
import Service_Procoss_step from "@/Comonents/User/Service/ServiceDetails/Service_Procoss_step";
import Service_tabs from "@/Comonents/User/Service/ServiceDetails/Service_tabs";
import Service_facility from "@/Comonents/User/Service/ServiceDetails/Service_facility";

const service_Banner_img = "/assets/images/banner/6.jpg";
const service_Process_img = "/assets/images/banner/2.jpg";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export default async function serviceDetails({ params }) {
  console.log(params);
  
   const serviceId = await params.id;
   const res = await fetch(`${baseUrl}/api/services/${serviceId}`);
   const serviceDetailsData = await res.json();



  const { service_id, title, service_image, price, description, facility } =
    serviceDetailsData;

  // const serviceId = await params.id
  return (
    <div>
      <CommonBanner
        Route="Home"
        Title="service Details"
        Bg_img={service_Banner_img}
      ></CommonBanner>
      <Container>
        <main className="service_info w-full md:flex gap-10 py-24">
          <section className="service_details w-full md:w-[60%] lg:w-[70%]  ">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px]">
              <Image src={service_image} alt={title} fill className="rounded-md"></Image>
            </div>
            <h1 className="text-[35px]  font-semibold capitalize my-4">
              {" "}
              {title}{" "}
            </h1>
            <p className="text-sm text-gray-600 mb-8">
              {" "}
              {`
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}{" "}
            </p>

            <Service_facility facility={facility}></Service_facility>

            <p className="text-sm text-gray-600 my-6">
              {`
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}{" "}
            </p>

            <div className="service_process">
              <h1 className="text-[35px]  font-semibold capitalize mb-6">
                {" "}
                3 Simple Steps to Process{" "}
              </h1>
              <p className="text-sm text-gray-600 mb-8">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`}</p>

              <Service_Procoss_step></Service_Procoss_step>
            </div>

            <div className="relative w-full h-[400px] mt-14">
              <Image
                src={service_Process_img}
                alt="service Process Image"
                fill
                className="rounded-md"
              ></Image>
              <div className="absolute inset-0  flex items-center justify-center">
                <BsPlayCircle className="text-[#FF3811] text-6xl cursor-pointer"></BsPlayCircle>
              </div>
            </div>
          </section>

          <section className=" w-full md:w-[40%] lg:w-[30%] mt-10 md:mt-0  ">
            <Service_tabs></Service_tabs>

            <div className="my-6">
              <DownloadSection></DownloadSection>
            </div>
            <CarDoctorCard serviceId={serviceId} price={price}></CarDoctorCard>
          </section>
        </main>
      </Container>
    </div>
  );
}

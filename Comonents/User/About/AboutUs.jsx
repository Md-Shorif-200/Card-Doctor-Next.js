import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/Comonents/Container";

const img_1 = "/assets/images/about_us/person.jpg";
const img_2 = "/assets/images/about_us/parts.jpg";

export default function AboutUs() {
  return (
    <div className="w-full h-full lg:h-[600px]  flex justify-center items-center pt-10 lg:pt-0  pb-14 lg:pb-0  ">
      <Container>
        <div className=" w-full h-full lg:h-[450px] grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          <div className="about_img md:relative h-full">
            <div className="md:absolute md:top-0  md:left-0">
              <div className="relative w-full md:w-[350px] lg:w-[400px]   h-[370px] ">
                <Image
                  alt="about-img-1"
                  src={img_1}
                  fill
                  className="rounded-lg"
                ></Image>
              </div>
            </div>

            <div className="md:absolute md:top-40 md:right-5 bg-white p-2 border border-gray-100 rounded-lg hidden lg:block ">
              <div className="relative w-[300px] h-[270px] ">
                <Image
                  src={img_2}
                  alt="about-image-2"
                  fill
                  className=""
                ></Image>
              </div>
            </div>
          </div>
          <div className="about_cnt">
            <h3 className="primary_color text-[20px] font-semibold capitalize">
              {" "}
              about us{" "}
            </h3>
            <h1 className=" text-3xl   lg:text-[45px] font-semibold capitalize lg:leading-[100%] my-3 lg:my-6 ">
              {" "}
              We are qualified & of experience in this field{" "}
            </h1>
            <p className="text-[16px] text-black/80 mb-4 ">
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>

            <p className="text-[16px] text-black/80 mb-4 hidden lg:block ">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>

            <Link href="/about-us">
              <button className="primary_btn">get more info</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

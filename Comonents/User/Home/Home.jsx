import React, { Suspense } from "react";
import Banner from "./Banner";
import AboutUs from "../About/AboutUs";
import FeaturedServices from "./FeaturedServices";
import OurInformation from "./OurInformation";
import OurProducts from "../Products/OurProducts";
import OurTeam from "./OurTeam";
import WhyChooseUs from "./WhyChooseUs";
import Loading from "@/app/loading";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Suspense fallback={<div><Loading></Loading></div>}>
        <FeaturedServices />
      </Suspense>

      <OurInformation></OurInformation>
      <OurProducts></OurProducts>
      <OurTeam></OurTeam>
      <WhyChooseUs />
    </div>
  );
}

import CarDoctorCard from "@/Comonents/CarDoctorCard";
import CommonBanner from "@/Comonents/CommonBanner";
import Container from "@/Comonents/Container";
import DownloadSection from "@/Comonents/DownloadSection";
import { dbCollection, dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";



const service_Banner_img = "/assets/images/banner/4.jpg";
const service_Process_img = "/assets/images/banner/2.jpg";

const service_process_step  = [
    {
      "id" : 1,
      "title" : "step one",
      "text" : "it use a dictionary of over 200"
    },
        {
      "id" : 2,
      "title" : "step two",
      "text" : "it use a dictionary of over 200"
    },

        {
      "id" : 3,
      "title" : "step three",
      "text" : "it use a dictionary of over 200"
    },
]

const service_tab_data = [ 
   {
    "id" : 1,
    "service" : "Full Car Repair"
   },
      {
    "id" : 2,
    "service" : "Engine Repair"
   },
      {
    "id" : 3,
    "service" : "Engine Repair"
   },
      {
    "id" : 4,
    "service" : "Automatic Services"
   },
      {
    "id" : 5,
    "service" : "Battery Charge"
   }
  ]

export default async function serviceDetails({ params }) {
  const serviceId = await params.id;

  const serviceDetailsData = await dbConnect(dbCollection.Services).findOne({
    _id: new ObjectId(serviceId),
  });
  console.log(serviceDetailsData);

  const { service_id, title, img, price, description, facility } =
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
            <div className="relative w-full h-[400px]">
              <Image src={img} alt={title} fill className="rounded-md"></Image>
            </div>
                 <h1 className="text-[35px]  font-semibold capitalize my-4"> {title} </h1>
                  <p className="text-sm text-gray-600 mb-8"> {`
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`} </p>

                    <div className="service_facilities grid grid-cols-2 gap-4">
                             {
                              facility.map((data,index) => {
                                 return (
                                   <div key={index} className="bg-[#F3F3F3] p-6 rounded-md">
                                          <h2 className="text-[20px] font-semibold"> {data?.name} </h2>
                                           <p className="text-[14px] leading-[25px] mt-2 text-gray-400"> {data?.details} </p>
                                   </div>
                                 )
                              })
                             }
                    </div>

                    <p className="text-sm text-gray-600 my-6">{`
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`} </p>

                     <div className="service_process">
                               <h1 className="text-[35px]  font-semibold capitalize mb-6"> 3 Simple Steps to Process </h1>
                                <p className="text-sm text-gray-600 mb-8">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`}</p>

                                 <div className="service_step_cards grid grid-cols-3 gap-6">
                                           {
                                             service_process_step.map((data,index) => {
                                               return (
                                                 <div key={index} className="flex flex-col justify-center items-center">
                                                      <div className="w-[80px] h-[80px] bg-red-300 rounded-full flex justify-center items-center">
                                                         <div className="w-[60px] h-[60px] rounded-full bg-[#FF3811] text-white text-2xl flex justify-center items-center">
                                                           <p> {data.id} </p>
                                                         </div> 
                                                      </div>
                                                       <h2 className="text-[16px] uppercase font-semibold my-1 "> {data.title} </h2>
                                                        <p className="text-[12px] capitalize text-gray-500"> {data.text} </p>
                                                 </div>
                                               )
                                             })
                                           }
                                 </div>
                     </div>

                      <div className="relative w-full h-[400px] mt-14">
                          <Image src={service_Process_img} alt="service Process Image" fill className="rounded-md"></Image>
                            <div className="absolute inset-0  flex items-center justify-center">
                            <BsPlayCircle className="text-[#FF3811] text-6xl cursor-pointer"></BsPlayCircle>
                                
                            </div>
                      </div>

     

          </section>

          <section className=" w-full md:w-[40%] lg:w-[30%]  ">

                                              <div className="services_tab bg-[#F3F3F3] p-10 rounded-md">
                                                  {
                                                    service_tab_data.map(data => {
                                                      return(
                                                         <div  key={data.id} className=" mb-6">

                                                            
                                                           <div className="p-4 bg-white font-normal flex justify-between items-center rounded-md">
                                                               <h1 className="font-semibold">{data.service} </h1>
                                                                <HiArrowLongRight></HiArrowLongRight>
                                                           </div>
                                                              
                                                         </div>
                                                      )
                                                    })
                                                  }
                                              </div>

                                               <DownloadSection></DownloadSection>
                                               <CarDoctorCard></CarDoctorCard>

          </section>
        </main>
      </Container>
    </div>
  );
}

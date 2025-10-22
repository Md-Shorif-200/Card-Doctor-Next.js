import { HiArrowLongRight } from "react-icons/hi2";
const service_tab_data = [
  {
    id: 1,
    service: "Full Car Repair",
  },
  {
    id: 2,
    service: "Engine Repair",
  },
  {
    id: 3,
    service: "Engine Repair",
  },
  {
    id: 4,
    service: "Automatic Services",
  },
  {
    id: 5,
    service: "Battery Charge",
  },
];

export default function Service_tabs() {
  return (
    <div>
            <div className="services_tab bg-[#F3F3F3] p-10 rounded-md">
              {service_tab_data.map((data) => {
                return (
                  <div key={data.id} className=" mb-6">
                    <div className="p-4 bg-white font-normal flex justify-between items-center rounded-md">
                      <h1 className="font-semibold">{data.service} </h1>
                      <HiArrowLongRight></HiArrowLongRight>
                    </div>
                  </div>
                );
              })}
            </div>
    </div>
  )
}

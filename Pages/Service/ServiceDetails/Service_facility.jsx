import React from 'react'

export default function Service_facility({facility}) {
  return (
    <div>
               <div className="service_facilities grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {facility.map((data, index) => {
                        return (
                          <div key={index} className="bg-[#F3F3F3] p-6 rounded-md">
                            <h2 className="text-[20px] font-semibold">
                              {" "}
                              {data?.name}{" "}
                            </h2>
                            <p className="text-[14px] leading-[25px] mt-2 text-gray-400">
                              {" "}
                              {data?.details}{" "}
                            </p>
                          </div>
                        );
                      })}
                    </div>
    </div>
  )
}

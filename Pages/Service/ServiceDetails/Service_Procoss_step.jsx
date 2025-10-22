const service_process_step = [
  {
    id: 1,
    title: "step one",
    text: "it use a dictionary of over 200",
  },
  {
    id: 2,
    title: "step two",
    text: "it use a dictionary of over 200",
  },

  {
    id: 3,
    title: "step three",
    text: "it use a dictionary of over 200",
  },
];
export default function Service_Procoss_step() {
  return (
    <div>
              <div className="service_step_cards grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {service_process_step.map((data, index) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-col justify-center items-center"
                            >
                              <div className="w-[80px] h-[80px] bg-red-300 rounded-full flex justify-center items-center">
                                <div className="w-[60px] h-[60px] rounded-full bg-[#FF3811] text-white text-2xl flex justify-center items-center">
                                  <p> {data.id} </p>
                                </div>
                              </div>
                              <h2 className="text-[16px] uppercase font-semibold my-1 ">
                                {" "}
                                {data.title}{" "}
                              </h2>
                              <p className="text-[12px] capitalize text-gray-500">
                                {" "}
                                {data.text}{" "}
                              </p>
                            </div>
                          );
                        })}
                      </div>
    </div>
  )
}

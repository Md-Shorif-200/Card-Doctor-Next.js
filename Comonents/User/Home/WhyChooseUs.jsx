import Image from "next/image";
import Container from "@/Comonents/Container";
import SectionTitle from "@/Comonents/SectionTitle";

const icon_5 = "/assets/icons/check.svg";
const icon_2 = "/assets/icons/deliveryt.svg";
// const icon_7 = "/assets/icons/Group 38729.svg";
const icon_1 = "/assets/icons/group.svg";
const icon_3 = "/assets/icons/person.svg";
const icon_6 = "/assets/icons/quote.svg";
const icon_4 = "/assets/icons/Wrench.svg";

const data = [
  {
    id: 1,
    title: "Expert Team",
    icon: icon_1,
  },
  {
    id: 2,
    title: "Timely Delivery",
    icon: icon_2,
  },
  {
    id: 3,
    title: "24/7 Support",
    icon: icon_3,
  },
  {
    id: 4,
    title: "Best Equipment",
    icon: icon_4,
  },
  {
    id: 5,
    title: "100% Guaranty",
    icon: icon_5,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-10">
      <SectionTitle
        title="Core Features"
        subTitle="Why Choose Us"
        paragraph={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
      />

      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {data.map((d) => (
            <div
              key={d.id}
              className="
                border border-gray-100 shadow-sm 
                p-5 rounded-xl 
                flex flex-col justify-center items-center
                bg-white
                transition-all duration-300 ease-in-out
                hover:-translate-y-2 hover:shadow-xl hover:bg-red-50
              "
            >
              <div
                className="
                  relative w-[60px] h-[60px] mb-2 
                  transition-transform duration-300 
                  group-hover:rotate-6
                "
              >
                <Image
                  src={d.icon}
                  alt={d.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h1
                className="
                  capitalize font-semibold text-gray-800 text-sm md:text-base 
                  transition-colors duration-300 
                  group-hover:text-red-600
                "
              >
                {d.title}
              </h1>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

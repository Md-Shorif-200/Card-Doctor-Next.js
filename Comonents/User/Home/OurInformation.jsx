import Container from "@/Comonents/Container";
import Image from "next/image";

const logo_1 = '/assets/ourInformation/Group-32.png'
const logo_2 = '/assets/ourInformation/Group-34.png'
const logo_3 = '/assets/ourInformation/Group-35.png'


const infoData = [
  {
    icon: "Calendar",
    title: "We are open monday - friday",
    content: "7:00 am - 9:00 pm",
    logo: logo_1
  },
  {
    icon: "Phone",
    title: "Have a question?",
    content: "+2546 251 2658",
    logo: logo_2
  },
  {
    icon: "Location",
    title: "Need a repair? our address",
    content: "Liza Street, New York",
    logo: logo_3
  },
];



export default function OurInformation() {
  return (
    <div className="bg-black text-white py-10">
         <Container>
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 flex-1 min-w-0"
          >
                    
                     <Image src={item.logo} alt="Information Image" width={30} height={30}
                     ></Image>

            <div className="flex flex-col">
              <p className="text-sm font-light text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </p>

              <p className="text-lg md:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
         </Container>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import Container from "@/Comonents/Container";
import SectionTitle from "@/Comonents/SectionTitle";

const team_1 = "/assets/images/team/1.jpg";
const team_2 = "/assets/images/team/2.jpg";
const team_3 = "/assets/images/team/3.jpg";

const teamData = [
  {
    id: 1,
    name: "Car Engine Plug",
    designation: "Engine Expert",
    image: team_1,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Car Engine Plug",
    designation: "Engine Expert",
    image: team_2,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Car Engine Plug",
    designation: "Engine Expert",
    image: team_3,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function OurTeam() {
  return (
    <div className="py-10">
      <SectionTitle
        title="Team"
        subTitle="Meet Our Team"
        paragraph="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamData.map((member) => (
            <div
              key={member?.id}
              className="
                bg-white border border-gray-100 rounded-xl shadow-sm 
                overflow-hidden transition-all duration-300 
                hover:shadow-lg hover:-translate-y-2
              "
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="text-center py-5 px-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member?.name}
                </h3>
                <p className="text-red-500 mb-4">{member?.designation}</p>

                <div className="flex justify-center space-x-4">
                  <Link
                    href={member?.social?.facebook}
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href={member?.social?.twitter}
                    className="p-2 rounded-full bg-gray-100 hover:bg-sky-400 hover:text-white transition-colors"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href={member?.social?.linkedin}
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-colors"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href={member?.social?.instagram}
                    className="p-2 rounded-full bg-gray-100 hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
